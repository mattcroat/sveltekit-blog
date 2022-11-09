<script lang="ts">
	import type { PageData } from './$types'

	import Sidebar from './sidebar.svelte'

	export let data: PageData

	$: ({ posts } = data)
</script>

<main>
	<Sidebar {posts} />
	<slot />
</main>

<style>
	main {
		overflow: hidden;
		border-radius: var(--radius-3);
		background-color: hsl(220 20% 8%);
	}

	@media (min-width: 768px) {
		main {
			display: grid;
			grid-template-columns: 20% 1fr;
		}
	}
</style>
