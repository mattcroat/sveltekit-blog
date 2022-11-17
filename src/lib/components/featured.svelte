<script lang="ts">
	import { formatDate } from '$lib/utils'
	import type { PostWithCategories } from '$lib/types'

	export let post: PostWithCategories
</script>

<a href={post.slug}>
	<article class="grid grid-cols-2" style:--gap="var(--spacing5)">
		<div class="scale">
			<img src={post.image} alt={post.title} />
		</div>

		<div class="space">
			<div class="brand lowercase">{post.category.name}</div>
			<h2 class="size-5 font-bold capitalize">{post.title}</h2>
			<p class="text-4 lines-4">{post.description}</p>
			<time class="block">{formatDate(post.createdAt)}</time>
		</div>
	</article>
</a>

<style lang="postcss">
	.scale {
		overflow: hidden;
		border-radius: var(--radius-3);

		&:hover {
			outline: 2px solid var(--brand);
			outline-offset: var(--size-2);
		}

		&:hover img {
			scale: 1.2;
			transition: scale 0.3s ease;
		}

		& img {
			aspect-ratio: 1.5 / 1;
			object-fit: cover;
		}
	}
</style>
