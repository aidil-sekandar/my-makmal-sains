/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				PlusJakartaSans: ["PlusJakartaSans", "sans-serif"],
				Sen: ["Sen", "sans-serif"],
			},
			colors: {
				bodyColor: "#FAFAFA",
				textPrimary: "#242425",
				textSecondary: "#616162",
				// pastel color pallete
				redPastel: "#f09ea7",
				orangePastel: "#f6ca94",
				yellowPastel: "#fafabe",
				greenPastel: "#d6ffd2",
				bluePastel: "#c7caff",
				purplePastel: "#C1BEFA",
				pinkPastel: "#ffdafd"
			}
		},
	},
}
