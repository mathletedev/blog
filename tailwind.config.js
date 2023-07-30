/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.{astro,svelte,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: "PT Sans",
				serif: "EB Garamond"
			}
		}
	},
	plugins: [
		require("@catppuccin/tailwindcss")({
			defaultFlavour: "mocha"
		})
	]
};
