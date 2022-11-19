<script lang="ts">
	import type { PageData } from './$types'

	import Sidebar from './sidebar.svelte'

	export let data: PageData

	$: ({ posts } = data)
</script>

<div class="sm:max-w-screen-xl sm:mx-auto px-8 mt-12">
	<main class="flex bg-neutral-800 rounded-2xl overflow-hidden">
		<Sidebar {posts} />
		<slot />
	</main>
</div>
