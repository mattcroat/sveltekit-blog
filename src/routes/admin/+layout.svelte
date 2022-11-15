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

<style lang="postcss">
	main {
		overflow: hidden;
		border-radius: var(--radius-3);
		background: var(--surface2);
		box-shadow: var(--shadow-2);

		@media (--medium) {
			display: grid;
			grid-template-columns: 28% 1fr;
		}
	}
</style>
