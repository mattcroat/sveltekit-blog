<script lang="ts">
	import FeaturedPost from '$lib/components/featured.svelte'
	import Post from '$lib/components/post.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ featured, posts } = data)
</script>

<div class="container">
	{#if featured}
		<FeaturedPost post={featured} />
	{/if}

	<div class="posts">
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>
</div>

<style lang="postcss">
	.container {
		--padding-block: var(--space-4);

		@media (--sm) {
			--padding-block: var(--space-7);
		}
	}

	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		margin-top: var(--space-7);
		gap: var(--space-6);
	}
</style>
