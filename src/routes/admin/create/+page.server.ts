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
			title: z.string().min(1, { message: 'Missing title' }),
			image: z.string().url({ message: 'Must provide image URL' }),
			description: z.string().min(1, { message: 'Missing description' }),
			category: z.string().min(1, { message: 'Missing category' }),
			markdown: z.string(),
			published: z.string().optional(),
			featured: z.string().optional(),
		})

		const validatedPost = postSchema.safeParse(postData)

		if (!validatedPost.success) {
			const { fieldErrors: errors } = validatedPost.error.flatten()
			return invalid(400, { error: true, errors })
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
