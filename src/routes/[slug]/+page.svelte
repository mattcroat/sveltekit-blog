<script lang="ts">
	import { marked } from 'marked'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	const markdown = marked.parse(data.post.markdown)
</script>

<main class="prose">
	{@html markdown}
</main>
