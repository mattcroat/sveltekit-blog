<script lang="ts">
	import FeaturedPost from '$lib/components/featured.svelte'
	import Post from '$lib/components/post.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ featured, posts } = data)
</script>

<div class="container mt-5">
	<FeaturedPost post={featured} />

	<div class="grid grid-cols-posts mt-5" style:--gap="var(--spacing5)">
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>
</div>
