<script lang="ts">
	type Post = {
		slug: string
		title: string
	}

	export let posts: Post[]
</script>

<aside class="w-60 p-8 border-r-2 border-r-neutral-900">
	<h4 class="text-2xl font-semibold">Posts</h4>

	<nav class="grid gap-4 mt-6">
		{#each posts as post}
			<a
				href="/admin/edit/{post.slug}"
				class="p-4 bg-neutral-700 border border-neutral-600 rounded-2xl capitalize overflow-hidden text-ellipsis"
			>
				{post.title}
			</a>
		{/each}
	</nav>
</aside>
