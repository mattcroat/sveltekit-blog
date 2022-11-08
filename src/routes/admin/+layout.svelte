<script lang="ts">
	import type { PageData } from './$types'

	import Sidebar from './sidebar.svelte'

	export let data: PageData
</script>

<main>
	<Sidebar posts={data.posts} />
	<slot />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 20% 1fr;
		overflow: hidden;
		border-radius: var(--radius-3);
		background-color: hsl(220 20% 8%);
	}
</style>
