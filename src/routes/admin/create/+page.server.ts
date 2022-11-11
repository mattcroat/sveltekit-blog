import type { Actions, PageServerLoad } from './$types'

import { createPost, getCategories } from '$lib/posts'
import { redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async () => {
	return {
		categories: await getCategories(),
	}
}

export const actions: Actions = {
	create: async ({ request }) => {
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
		createPost(post, category)

		throw redirect(303, '/admin')
	},
}
