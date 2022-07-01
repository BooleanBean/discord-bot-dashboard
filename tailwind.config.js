/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/common/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/utils/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"]
			}
		}
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("flowbite/plugin"),
		require("tailwind-gradient-mask-image")
	]
};
