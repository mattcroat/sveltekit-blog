<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import Editor from '@toast-ui/editor'

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

<style lang="postcss" global>
	@import '@toast-ui/editor/dist/toastui-editor.css';
	@import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

	.loading {
		display: grid;
		place-content: center;
		height: 600px;
	}

	.editor {
		margin-block: var(--space-2);
	}

	.editor .ProseMirror {
		font-size: var(--fs-1);
		font-family: var(--font-sans);
	}

	.editor .toastui-editor-defaultUI {
		font-family: var(--font-sans);
	}

	.editor .toastui-editor-dark .toastui-editor-md-tab-container,
	.editor .toastui-editor-dark .toastui-editor-defaultUI-toolbar,
	.editor .toastui-editor-dark .toastui-editor-md-tab-container .tab-item,
	.editor .toastui-editor-dark .toastui-editor-mode-switch .tab-item {
		background: none;
	}

	.editor .toastui-editor-dark.toastui-editor-defaultUI,
	.editor .toastui-editor-dark .toastui-editor-md-tab-container .tab-item,
	.editor .toastui-editor-dark .toastui-editor-toolbar-icons,
	.editor .toastui-editor-dark .toastui-editor-mode-switch .tab-item {
		border: 1px solid var(--form-element-border-color);
	}

	.editor .toastui-editor-dark .toastui-editor-defaultUI-toolbar,
	.editor .toastui-editor-dark .toastui-editor-md-tab-container {
		border-bottom-color: var(--form-element-border-color);
	}

	.editor .toastui-editor-dark .toastui-editor-mode-switch {
		border-top-color: var(--form-element-border-color);
	}

	.editor
		.toastui-editor-dark
		.toastui-editor-md-tab-container
		.tab-item.active {
		background: none;
	}

	.editor .toastui-editor-dark .toastui-editor-md-container,
	.editor .toastui-editor-dark .toastui-editor-ww-container,
	.editor .toastui-editor-dark .toastui-editor-mode-switch {
		background: none;
	}

	.editor .toastui-editor-dark .toastui-editor-dropdown-toolbar {
		border-color: var(--form-element-border-color);
		background: none;
	}

	.editor .toastui-editor-dark .toastui-editor-mode-switch .tab-item.active {
		background: none;
	}

	.toastui-editor-dark .toastui-editor-md-code-block-line-background {
		background: none;
	}
</style>
