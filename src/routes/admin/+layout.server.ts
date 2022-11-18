import type { LayoutServerLoad } from './$types'
import { getPostsToEdit } from '$lib/posts'

export const load: LayoutServerLoad = async () => {
	const postsToEdit = await getPostsToEdit()

	const posts = postsToEdit.map((post) => ({
		slug: post.slug,
		title: post.title,
	}))

	return { posts }
}
