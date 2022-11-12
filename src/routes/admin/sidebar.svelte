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

<style>
	aside {
		padding: var(--size-6);
		background-color: hsl(220 20% 10%);
	}

	nav {
		display: grid;
		margin-top: var(--size-6);
		gap: var(--size-3);
	}

	a {
		padding: 1rem;
		overflow: hidden;
		border: 1px solid var(--gray-9);
		border-radius: var(--radius-3);
		background-color: hsl(220 20% 12%);
		box-shadow: var(--shadow-1);
		color: var(--gray-0);
		text-overflow: ellipsis;
		text-transform: capitalize;
		white-space: nowrap;
	}

	a:hover {
		background-color: hsl(220 20% 14%);
		color: var(--red-5);
	}
</style>
