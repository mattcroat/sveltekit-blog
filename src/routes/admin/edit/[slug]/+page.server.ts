import type { Actions, PageServerLoad } from './$types'
import type { Post } from '@prisma/client'

import { getPost, updatePost } from '$lib/posts'

export const load: PageServerLoad = async ({ params }) => {
	return await getPost(params.slug)
}

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData()
		// todo: I hate this
		const entries = Object.fromEntries(form) as unknown as Post
		updatePost(entries.slug, entries)
	},
}
