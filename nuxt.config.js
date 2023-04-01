export default defineNuxtConfig({
	target: "static",
	ssr: true,
	extends: 'content-wind',

	css: [
		'~/assets/scss/fonts.scss'
	],

	head: {
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ charset: 'utf-8' }
		],
		link: [
			{ 
				rel: 'icon',
				href: `/dnd/favicon.ico` 
			}
		],
		titleTemplate: "%s 🗡 Нож Дануолла"
	},

	app: {
		baseURL: '/dnd/'
	}
})
