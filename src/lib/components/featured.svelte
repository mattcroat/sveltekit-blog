<script lang="ts">
	import { formatDate } from '$lib/utils'
	import type { PostWithCategory } from '$lib/types'

	export let post: PostWithCategory
</script>

<a href={post.slug}>
	<article class="grid">
		<div class="scale">
			<img src={post.image} alt={post.title} />
		</div>

		<div class="space-items">
			<div class="brand lowercase">{post.category.name}</div>
			<h2 class="fs-3 font-bold capitalize">{post.title}</h2>
			<p class="text-4 line-clamp-4">{post.description}</p>
			<time class="block">{formatDate(post.createdAt)}</time>
		</div>
	</article>
</a>

<style lang="postcss">
	article {
		--gap: var(--space-3);

		@media (--md) {
			--gap: var(--space-5);
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.scale {
		overflow: hidden;
		border-radius: var(--round-1);

		&:hover {
			outline: 2px solid var(--brand);
			outline-offset: var(--space-1);
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
