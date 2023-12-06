import type { Metadata } from 'next';

import ReduxProvider from './redux-provider';
import { geologica } from '@/ui/fonts';
import '@/ui/globals.css';
import '../public/css/weather-icons/weather-icons.min.css';
import '../public/css/weather-icons/weather-icons-wind.min.css';

export const metadata: Metadata = {
	title: 'Weather App',
	description: 'Search weather in capital cities',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={`${geologica.className} antialiased`}>
			<body>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
