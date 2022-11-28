const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			mono: ['JetBrains Mono', 'mono'],
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}

module.exports = config
