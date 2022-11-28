<script lang="ts">
	import { formatDate } from '$lib/utils'
	import type { PostWithCategory } from '$lib/types'

	export let post: PostWithCategory
</script>

<a href={post.slug}>
	<article class="group md:grid md:grid-cols-2">
		<div
			class="rounded-2xl shadow-sm overflow-hidden group-hover:outline-red-400 group-hover:outline-2 group-hover:outline-offset-8"
		>
			<img
				class="w-full h-full object-cover aspect-[16/9] rounded-2xl group-hover:scale-125 transition-transform md:aspect-[1.5/1]"
				src={post.image}
				alt={post.title}
			/>
		</div>

		<div class="space-y-4 md:ml-6">
			<div class="mt-6 md:mt-0 text-red-600 dark:text-red-400 lowercase">
				{post.category.name}
			</div>
			<h2 class="text-3xl font-bold capitalize">{post.title}</h2>
			<p class="text-lg text-neutral-500 dark:text-neutral-400 line-clamp-4">
				{post.description}
			</p>
			<time class="block">{formatDate(post.createdAt)}</time>
		</div>
	</article>
</a>
