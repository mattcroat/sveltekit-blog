import type { LayoutLoad } from './$types'
import type { PostWithoutMarkdown } from '$lib/types'

export const load: LayoutLoad = async ({ fetch }) => {
	const response = await fetch('/api/posts')
	const data: PostWithoutMarkdown[] = await response.json()

	const posts = data.map((post) => ({
		slug: post.slug,
		title: post.title,
	}))

	return { posts }
}
