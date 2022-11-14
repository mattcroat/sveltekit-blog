<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ html } = data)
</script>

<main class="prose">
	{@html html}
</main>
