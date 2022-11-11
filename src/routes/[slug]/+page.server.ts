import type { PageServerLoad } from './$types'

import { getPostMarkdown } from '$lib/posts'
import { parseMarkdownToHtml } from './markdown'

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPostMarkdown(params.slug)
	const html = parseMarkdownToHtml(post.markdown)
	return { html }
}
