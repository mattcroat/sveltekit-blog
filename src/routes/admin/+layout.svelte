<script lang="ts">
	import type { PageData } from './$types'

	import Sidebar from './sidebar.svelte'

	export let data: PageData

	$: ({ posts } = data)
</script>

<div class="container">
	<main>
		<div class="sidebar">
			<Sidebar {posts} />
		</div>

		<div>
			<slot />
		</div>
	</main>
</div>

<style lang="postcss">
	.container {
		padding-block: var(--space-7);
	}

	main {
		display: grid;
		grid-template-columns: 28% 1fr;
	}

	/* .sidebar {
		background: teal;
	} */
</style>
