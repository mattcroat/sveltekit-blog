import type { PageServerLoad } from './$types'

import { getPostMarkdown } from '$lib/posts'
import { parseMarkdownToHtml } from './markdown'

export const load: PageServerLoad = async ({ params, url }) => {
	const isPreview = url.searchParams.has('preview')
	const post = await getPostMarkdown(params.slug, isPreview)
	const html = parseMarkdownToHtml(post.markdown)
	return { html }
}
