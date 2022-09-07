/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			spacing: {
				100: '570px',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['winter'],
	},
};
