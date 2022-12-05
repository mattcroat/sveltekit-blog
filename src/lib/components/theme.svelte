<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte'
	import { fly } from 'svelte/transition'
	import { browser } from '$app/environment'

	type Theme = 'light' | 'dark'

	let theme: Theme = browser && localStorage.theme

	function setTheme() {
		document.documentElement.dataset.theme = theme
		localStorage.theme = theme
	}

	function toggleTheme() {
		switch (theme) {
			case 'light':
				theme = 'dark'
				setTheme()
				break
			case 'dark':
				theme = 'light'
				setTheme()
				break
		}
	}
</script>

<svelte:head>
	<script>
		function getTheme() {
			const theme = localStorage.getItem('theme')
			const mediaQuery = '(prefers-color-scheme: dark)'

			if (theme) {
				return localStorage.theme
			}

			return window.matchMedia(mediaQuery).matches ? 'dark' : 'light'
		}

		function setTheme() {
			const theme = getTheme()
			const htmlEl = document.documentElement
			localStorage.theme = theme
			htmlEl.dataset.theme = theme
		}

		setTheme()
	</script>
</svelte:head>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if theme === 'light'}
		<div in:fly={{ y: 10 }}>
			<Moon />
		</div>
	{/if}

	{#if theme === 'dark'}
		<div in:fly={{ y: -10 }}>
			<Sun />
		</div>
	{/if}
</button>

<style lang="postcss">
	button {
		margin: 0;
		padding: 0;
		overflow: hidden;
		border: none;
		background: none;
		color: inherit;
	}
</style>
