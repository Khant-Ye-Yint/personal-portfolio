/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				black: '#172026',
				gray: '#DEEFE7',
				green: '#37E099',
				lightGray: '#A1A1A1',
				'green-100': '#04c57a',
				'green-200': '#00a064',
			},
			fontFamily: {
				dosis: ['Dosis', 'sans-serif'],
				saira: ['Saira', 'sans-serif'],
				bad: ['Bad Script', 'cursive'],
			},
			minHeight: {
				vh10: '10vh',
				vh90: '90vh',
			},
			width: {
				500: '500px',
			},
		},
	},
	plugins: [],
};
