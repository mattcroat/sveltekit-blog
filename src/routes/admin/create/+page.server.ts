import { z } from 'zod'
import { invalid, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

import { createPost, getCategories } from '$lib/posts'

export const load: PageServerLoad = async () => {
	return {
		categories: await getCategories(),
	}
}

export const actions: Actions = {
	create: async ({ request }) => {
		const formData = await request.formData()
		const postData = Object.fromEntries(formData)

		const postSchema = z.object({
			slug: z
				.string()
				.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'Invalid slug' }),
			title: z.string().min(1, { message: 'Enter a title' }),
			image: z.string().url({ message: 'Must provide image URL' }),
			description: z.string().min(1, { message: 'Enter a description' }),
			category: z.string().min(1, { message: 'Select a category' }),
			markdown: z.string(),
			published: z.string(),
			featured: z.string(),
		})

		const post = postSchema.safeParse(postData)

		if (!post.success) {
			const { fieldErrors: errors } = post.error.flatten()
			return invalid(400, { error: true, errors })
		}

		// createPost(
		// 	{
		// 		...post,
		// 		published: !!post.data.published,
		// 		featured: !!post.data.featured,
		// 	},
		// 	post.data.category
		// )
		// throw redirect(303, '/admin')
	},
}
