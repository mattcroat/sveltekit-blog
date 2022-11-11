import { marked } from 'marked'
import hljs from 'highlight.js'

export function parseMarkdownToHtml(markdown: string) {
	marked.setOptions({
		highlight: (code, language) => {
			return hljs.highlight(code, { language }).value
		},
		smartypants: true,
	})

	return marked.parse(markdown)
}
