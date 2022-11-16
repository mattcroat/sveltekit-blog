<script lang="ts">
	type Post = {
		slug: string
		title: string
	}

	export let posts: Post[]
</script>

<aside>
	<h4>Posts</h4>

	<nav>
		{#each posts as post}
			<a href="/admin/edit/{post.slug}">
				{post.title}
			</a>
		{/each}
	</nav>
</aside>

<style lang="postcss">
	aside {
		padding: var(--size-6);
		border-right: 1px solid hsl(0 0% 24%);

		@nest :global([data-theme='light']) & {
			border-right: 1px solid hsl(0 0% 90%);
		}

		& nav {
			display: grid;
			margin-top: var(--size-3);
			gap: var(--size-3);
		}

		& a {
			--_color: var(--text2);

			padding: var(--size-3);
			overflow: hidden;
			border: 1px solid hsl(0 0% 34%);
			border-radius: var(--radius-3);
			background: var(--surface3);
			box-shadow: var(--shadow-1);
			text-decoration: none;
			text-overflow: ellipsis;
			text-transform: capitalize;
			white-space: nowrap;

			@nest :global([data-theme='light']) & {
				border: 1px solid hsl(0 0% 84%);
			}
		}
	}
</style>
