import { getPost } from '$lib/posts'
import { parseMarkdownToHtml } from './markdown'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params, url }) => {
	const isPreview = url.searchParams.has('preview')
	const { markdown, title, description, image } = await getPost(
		params.slug,
		isPreview
	)
	const html = parseMarkdownToHtml(markdown)

	const meta = {
		title,
		description,
		image,
	}

	return { html, meta }
}
