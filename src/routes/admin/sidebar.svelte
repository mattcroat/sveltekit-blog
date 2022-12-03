<script lang="ts">
	type Post = {
		slug: string
		title: string
	}

	export let posts: Post[]
</script>

<aside>
	<span class="title">Posts</span>

	<div class="search">
		<form method="GET" action="/admin?/search" autocomplete="off">
			<input type="search" name="search" placeholder="Search" />
		</form>
	</div>

	<div class="results">
		{#each posts as post}
			<ul>
				<a href="/admin/edit/{post.slug}">
					{post.title}
				</a>
			</ul>
		{/each}
	</div>
</aside>

<style lang="postcss">
	aside {
		padding-inline-end: var(--space-6);
		border-right: 1px solid hsl(206 29% 20%);
	}

	.title {
		color: white;
		font-weight: 600;
		font-size: var(--fs-3);
	}

	.search {
		margin-top: var(--space-2);
	}

	.results {
	}
</style>
