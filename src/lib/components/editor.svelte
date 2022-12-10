<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import type Editor from '@toast-ui/editor'

	import '@toast-ui/editor/dist/toastui-editor.css'
	import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

	export let initialValue: string = ''

	const dispatch = createEventDispatcher()
	let editor: Editor

	function getMarkdown() {
		dispatch('update', { markdown: editor.getMarkdown() })
	}

	async function loadEditor() {
		const toastui = await import('@toast-ui/editor')
		const Editor = toastui.Editor

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
			},
		})
	}

	onMount(() => {
		loadEditor()
	})
</script>

<div id="editor" />
