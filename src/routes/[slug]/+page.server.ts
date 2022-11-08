import type { PageServerLoad } from './$types'

import { getPostMarkdown } from '$lib/posts'

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPostMarkdown(params.slug)
	return { post }
}
