import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: 'black',
				secondary: '#79acb6',
				blue: {
					1: '#142534',
					2: '#91B7CC',
					3: '#3893B1',
					4: '#267AB9',
					5: '#033670',
					6: '#1F5B88',
				},
			},
			backgroundImage: {
				gradient: 'url("/assets/images/gradient.jpg")',
			},
			fontFamily: {
				geologica: ['var(--font-geologica)'],
			},
			maxWidth: {
				wrapper: '1024px',
			},
		},
	},
	plugins: [],
};
export default config;
