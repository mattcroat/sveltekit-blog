import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

import { db } from '$lib/database'

async function getPosts() {
	return await db.post.findMany({
		select: {
			createdAt: true,
			slug: true,
			title: true,
			published: true,
		},
		orderBy: { createdAt: 'asc' },
	})
}

export const GET: RequestHandler = async () => {
	const posts = await getPosts()
	return json(posts)
}
