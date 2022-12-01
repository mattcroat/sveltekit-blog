import type { LayoutServerLoad } from './$types'
import { searchPosts } from '$lib/posts'

export const load: LayoutServerLoad = async ({ url }) => {
	const searchTerm = url.searchParams.get('search') as string
	const posts = await searchPosts(searchTerm)
	return { posts }
}
