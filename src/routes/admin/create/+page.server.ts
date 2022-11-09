import type { Actions, PageServerLoad } from './$types'

import { createPost, getCategories } from '$lib/posts'

export const load: PageServerLoad = async () => {
	return {
		categories: await getCategories(),
	}
}

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData()

		const post = {
			slug: form.get('slug') as string,
			title: form.get('title') as string,
			image: form.get('image') as string,
			description: form.get('description') as string,
			markdown: form.get('markdown') as string,
			published: !!form.get('published'),
			featured: !!form.get('featured'),
		}

		const category = form.get('category') as string

		createPost(post, category)
	},
}
