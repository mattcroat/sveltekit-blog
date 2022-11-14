<script lang="ts">
	import Post from '$lib/components/post.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ posts } = data)
</script>

{#each posts as post}
	{#if post.featured && post.published}
		<div class="featured">
			<Post {post} featured />
		</div>
	{/if}
{/each}

<div class="posts">
	{#each posts as post}
		{#if post.published}
			<Post {post} />
		{/if}
	{/each}
</div>

<style lang="postcss">
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		margin-top: var(--size-8);
		gap: var(--size-8);
	}
</style>
