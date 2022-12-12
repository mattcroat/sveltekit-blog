import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

import { searchPosts } from '$lib/posts'

export const GET: RequestHandler = async ({ url }) => {
	const searchTerm = url.searchParams.get('term') as string
	const results = await searchPosts(searchTerm)
	return json(results)
}
