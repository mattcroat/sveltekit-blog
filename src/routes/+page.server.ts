import { getFeaturedPost, getPosts } from '$lib/posts'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	return {
		featured: await getFeaturedPost(),
		posts: await getPosts(),
	}
}
