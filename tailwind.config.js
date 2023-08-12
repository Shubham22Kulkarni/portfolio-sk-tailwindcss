/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

function customColors(cssVar) {
	return `var(${cssVar})`;
}

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: customColors("--primary-50"),
				},
				secondary: {
					0: customColors("--secondary-0"),
					40: customColors("--secondary-40"),
					50: customColors("--secondary-50"),
					80: customColors("--secondary-80"),
					90: customColors("--secondary-90"),
					100: customColors("--secondary-100"),
				},
			},
		},
	},
	plugins: [],
}

