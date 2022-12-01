const postcssPresetEnv = require('postcss-preset-env')

const config = {
	plugins: [
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true,
			},
		}),
	],
}

module.exports = config
