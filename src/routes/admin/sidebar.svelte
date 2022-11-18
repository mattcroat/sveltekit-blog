<script lang="ts">
	type Post = {
		slug: string
		title: string
	}

	export let posts: Post[]
</script>

<aside class="bg-3">
	<h4 class="text-1">Posts</h4>

	<nav class="mt-2 space-items">
		{#each posts as post}
			<a
				href="/admin/edit/{post.slug}"
				class="post block capitalize round-1 shadow-1 overflow-hidden ellipsis"
			>
				{post.title}
			</a>
		{/each}
	</nav>
</aside>

<style lang="postcss">
	aside {
		padding: var(--space-4);
	}

	.post {
		--bg: hsl(210 9% 36%);
		--border: hsl(210 9% 40%);

		padding: var(--space-2);
		border: 1px solid var(--border);
		background: var(--bg);
		transition: background 0.3s ease;

		&:hover {
			--bg: hsl(210 9% 38%);
		}

		@nest :global([data-theme='light']) & {
			--bg: hsl(210 16% 94%);
			--border: hsl(210 16% 90%);

			&:hover {
				--bg: hsl(210 16% 96%);
			}
		}
	}
</style>
