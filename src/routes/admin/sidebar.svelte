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
		padding: var(--size-8);
		background-color: hsl(220 20% 10%);
	}

	nav {
		display: grid;
		margin-top: var(--size-6);
		gap: var(--size-3);
	}
</style>
