<script lang="ts">
	import type { PageData } from './$types'

	import Search from './search.svelte'

	export let data: PageData

	$: ({ posts } = data)
</script>

<div class="container">
	<main>
		<div class="search">
			<Search {posts} />
		</div>

		<div class="editor">
			<slot />
		</div>
	</main>
</div>

<style lang="postcss">
	.container {
		--padding-block: var(--space-4);

		@media (--sm) {
			--padding-block: var(--space-7);
		}
	}

	main {
		@media (--md) {
			display: grid;
			grid-template-columns: 28% 1fr;

			& .search {
				border-right: 1px solid var(--clr-border-muted);
			}

			& .editor {
				padding-left: var(--space-6);
			}
		}
	}
</style>
