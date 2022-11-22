const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
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
