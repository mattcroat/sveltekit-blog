<script lang="ts">
	import FeaturedPost from '$lib/components/featured.svelte'
	import Post from '$lib/components/post.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ featured, posts } = data)
</script>

<div class="container">
	<div class="featured mt-4">
		<FeaturedPost post={featured} />
	</div>

	<div class="posts grid mt-5">
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>
</div>

<style lang="postcss">
	.featured {
		@media (--md) {
			margin-top: var(--space-6);
		}
	}

	.posts {
		--gap: var(--space-5);
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
