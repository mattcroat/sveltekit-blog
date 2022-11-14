<script lang="ts">
	type Post = {
		slug: string
		title: string
	}

	export let posts: Post[]
</script>

<aside class="surface3">
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

		& nav {
			display: grid;
			margin-top: var(--size-6);
			gap: var(--size-3);
		}

		& a {
			padding: 1rem;
			overflow: hidden;
			border-radius: var(--radius-3);
			background: var(--surface1);
			box-shadow: var(--shadow-1);
			text-overflow: ellipsis;
			text-transform: capitalize;
			white-space: nowrap;
		}
	}
</style>
