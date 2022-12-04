/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				gray: {
					900: 'rgb(20,21,26)',
					950: 'rgb(32,36,49)',
				},
				primary: {
					500: 'rgb(0,242,254)',
					800: 'rgb(13,191,200)',
				},
			},
		},
	},
	plugins: [],
};
