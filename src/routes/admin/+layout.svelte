<script lang="ts">
	import type { PageData } from './$types'

	import Sidebar from './sidebar.svelte'

	export let data: PageData

	$: ({ posts } = data)
</script>

<main class="surface2">
	<Sidebar {posts} />
	<slot />
</main>

<style lang="postcss">
	main {
		overflow: hidden;
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);

		@media (--md-n-above) {
			display: grid;
			grid-template-columns: 28% 1fr;
		}
	}
</style>
