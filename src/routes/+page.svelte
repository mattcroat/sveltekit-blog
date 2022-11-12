<script lang="ts">
	import Post from '$lib/components/post.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ posts } = data)
</script>

{#each posts as post}
	{#if post.featured}
		<div class="featured">
			<Post {post} featured />
		</div>
	{/if}
{/each}

<div class="posts">
	{#each posts as post}
		<Post {post} />
	{/each}
</div>

<style>
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		margin-top: var(--size-8);
		gap: var(--size-8);
	}
</style>
