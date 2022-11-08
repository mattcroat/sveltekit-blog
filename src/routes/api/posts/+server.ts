import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

import { getPosts } from '$lib/posts'

export const GET: RequestHandler = async () => {
	const posts = await getPosts()
	return json(posts)
}
