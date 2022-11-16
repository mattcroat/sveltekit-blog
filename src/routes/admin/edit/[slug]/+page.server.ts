import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

import { deletePost, getPostWithCategories, updatePost } from '$lib/posts'

export const load: PageServerLoad = async ({ params }) => {
	return await getPostWithCategories(params.slug)
}

export const actions: Actions = {
	save: async ({ request }) => {
		const data = await request.formData()

		const post = {
			slug: data.get('slug') as string,
			title: data.get('title') as string,
			image: data.get('image') as string,
			description: data.get('description') as string,
			markdown: data.get('markdown') as string,
			published: !!data.get('published'),
			featured: !!data.get('featured'),
		}
		const category = data.get('category') as string

		updatePost(post, category)

		throw redirect(303, `/admin/edit/${post.slug}`)
	},
	delete: async ({ request }) => {
		const data = await request.formData()

		const slug = data.get('slug') as string
		deletePost(slug)

		throw redirect(303, '/admin')
	},
}
