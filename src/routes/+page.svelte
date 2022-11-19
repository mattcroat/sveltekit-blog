<script lang="ts">
	import FeaturedPost from '$lib/components/featured.svelte'
	import Post from '$lib/components/post.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ featured, posts } = data)
</script>

<div class="sm:max-w-screen-xl sm:mx-auto px-8 mt-12">
	<FeaturedPost post={featured} />

	<div class="grid grid-cols-posts gap-12 mt-12">
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>
</div>
