<script lang="ts">
	import { formatDate } from '$lib/utils'
	import type { PostWithCategory } from '$lib/types'

	export let post: PostWithCategory
</script>

<a href={post.slug}>
	<article>
		<div class="zoom">
			<img src={post.image} alt={post.title} />
		</div>

		<div class="details">
			<div class="category">{post.category.name}</div>
			<h2 class="title">{post.title}</h2>
			<p class="description line-clamp-4">{post.description}</p>
			<time class="date">{formatDate(post.createdAt)}</time>
		</div>
	</article>
</a>

<style lang="postcss">
	.zoom {
		overflow: hidden;
		border-radius: var(--round-1);

		&:hover {
			outline: 2px solid var(--clr-brand);
			outline-offset: var(--space-1);
		}

		&:hover img {
			scale: 1.2;
		}

		& img {
			aspect-ratio: 16 / 9;
			object-fit: cover;
			transition: scale 0.3s ease;

			@media (--md) {
				aspect-ratio: 1 / 1.3;
			}
		}
	}

	.details {
		display: grid;
		gap: var(--space-2);

		& .category {
			margin-top: var(--fs-3);
			color: var(--clr-brand);
			text-transform: lowercase;
		}

		& .title {
			color: hsl(0 0% 98%);
			font-weight: 700;
			font-size: var(--fs-3);
			text-transform: capitalize;
		}

		& .description {
			color: hsl(0 0% 45%);
			font-size: var(--fs-2);
		}

		& .date {
			color: hsl(0 0% 98%);
		}
	}
</style>
