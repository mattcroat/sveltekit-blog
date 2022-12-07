<script lang="ts">
	type Post = {
		slug: string
		title: string
	}

	export let posts: Post[]
</script>

<aside>
	<h2>Posts</h2>

	<div class="search">
		<form method="GET" action="/admin?/search" autocomplete="off">
			<input type="search" name="search" placeholder="Search" />
		</form>
	</div>

	<div class="results">
		<ul>
			{#each posts as post}
				<li>
					<a href="/admin/edit/{post.slug}">
						{post.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>

<style lang="postcss">
	aside {
		padding-right: var(--space-6);
	}

	.search {
		margin-top: var(--space-2);
	}

	.results {
		max-height: 400px;
		overflow-y: auto;
		text-transform: capitalize;
	}
</style>
