/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "hsl(0, 0%, 100%)",
				black: "hsl(0, 0%, 0%)",
				darkgray: "hsl(0, 0%, 41%)",
				gray: " hsl(0, 0%, 55%)",
			},
		},
	},
	plugins: [],
};
