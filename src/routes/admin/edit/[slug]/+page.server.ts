import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

import { deletePost, getPostWithCategories, updatePost } from '$lib/posts'
import { postSchema, validate } from '$lib/validate'

export const load: PageServerLoad = async ({ params }) => {
	return await getPostWithCategories(params.slug)
}

export const actions: Actions = {
	save: async ({ request }) => {
		const formData = await request.formData()
		const validatedPost = validate(formData, postSchema)

		if (validatedPost.errors) {
			return fail(400, {
				error: true,
				errors: validatedPost.errors.fieldErrors,
			})
		}

		const slug = formData.get('currentSlug') as string
		const post = {
			...validatedPost.data,
			published: !!validatedPost.data.published,
			featured: !!validatedPost.data.featured,
		}
		const category = validatedPost.data.category

		updatePost(slug, post, category)
	},
	delete: async ({ request }) => {
		const formData = await request.formData()
		const slug = formData.get('slug') as string

		deletePost(slug)

		throw redirect(303, '/admin')
	},
}
