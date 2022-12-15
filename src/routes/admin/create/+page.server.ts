import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

import { createPost, getCategories } from '$lib/posts'
import { postSchema, validate } from '$lib/validate'

export const load: PageServerLoad = async () => {
	return {
		categories: await getCategories(),
	}
}

export const actions: Actions = {
	create: async ({ request }) => {
		const formData = await request.formData()
		const validatedPost = validate(formData, postSchema)

		if (validatedPost.errors) {
			return fail(400, {
				error: true,
				errors: validatedPost.errors.fieldErrors,
			})
		}

		const post = {
			...validatedPost.data,
			published: !!validatedPost.data.published,
			featured: !!validatedPost.data.featured,
		}
		const category = validatedPost.data.category

		createPost(post, category)

		throw redirect(303, `/admin/edit/${post.slug}`)
	},
}
