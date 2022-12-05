import type { LayoutServerLoad } from './$types'
import { searchPosts } from '$lib/posts'
import { error } from '@sveltejs/kit'

export const load: LayoutServerLoad = async ({ url }) => {
	const searchTerm = url.searchParams.get('search') as string
	const posts = await searchPosts(searchTerm)

	if (!posts) {
		throw error(404, 'Could not find posts')
	}

	return { posts }
}
