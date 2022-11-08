<script lang="ts">
	import Post from '$lib/components/post.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

{#each data.posts as post}
	<div class="featured">
		{#if post.featured}
			<Post {post} featured />
		{/if}
	</div>
{/each}

<div class="posts">
	{#each data.posts as post}
		<Post {post} />
	{/each}
</div>

<style>
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--size-8);
	}
</style>
