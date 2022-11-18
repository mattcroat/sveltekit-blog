<script lang="ts">
	import type { PageData } from './$types'

	import Sidebar from './sidebar.svelte'

	export let data: PageData

	$: ({ posts } = data)
</script>

<div class="container">
	<main class="grid mt-6 bg-2 shadow-2 round-1 overflow-hidden">
		<Sidebar {posts} />
		<slot />
	</main>
</div>

<style lang="postcss">
	main {
		@media (--md) {
			grid-template-columns: 28% 1fr;
		}
	}
</style>
