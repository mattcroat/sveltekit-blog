<script lang="ts">
	import Seo from '$lib/components/seo.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ html, meta } = data)
</script>

<Seo {meta} />

<main class="prose">
	{@html html}
</main>
