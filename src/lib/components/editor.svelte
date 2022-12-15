<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import Editor from '@toast-ui/editor'

	import '@toast-ui/editor/dist/toastui-editor.css'
	import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

	export let initialValue: string = ''

	const dispatch = createEventDispatcher()

	let editor: Editor
	let loading = true

	async function loadEditor() {
		editor = new Editor({
			initialValue,
			el: document.querySelector('#editor')!,
			height: '600px',
			initialEditType: 'markdown',
			previewStyle: 'tab',
			theme: 'dark',
			usageStatistics: false,
			events: {
				change: () => getMarkdown(),
				load: () => (loading = false),
			},
		})
	}

	function getMarkdown() {
		dispatch('update', { markdown: editor.getMarkdown() })
	}

	onMount(() => {
		loadEditor()
	})
</script>

{#if loading}
	<div class="loading" aria-busy={loading} />
{/if}

<div id="editor" />

<style lang="postcss">
	.loading {
		display: grid;
		place-content: center;
		height: 600px;
	}
</style>
