<script lang="ts">
	import type { PageData } from './$types'

	import Sidebar from './sidebar.svelte'

	export let data: PageData

	$: ({ posts } = data)
</script>

<div class="sm:max-w-screen-xl sm:mx-auto px-8 mt-12">
	<main
		class="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-800 md:grid md:grid-cols-editor"
	>
		<div class="p-8 bg-neutral-900/40">
			<Sidebar {posts} />
		</div>

		<div>
			<slot />
		</div>
	</main>
</div>
