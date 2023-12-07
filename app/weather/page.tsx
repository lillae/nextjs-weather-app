import { CurrentWeather } from '.';
import { fetchCurrentWeather, fetchCoordinates } from '@/services/weather-data';
import Error from '../search/error';
import { notFound } from 'next/navigation';
interface Params {
	searchParams: {
		city: string;
		countryCode: string;
	};
}

export const dynamic = 'force-dynamic';

export default async function Weather({ searchParams }: Params) {
	const city = searchParams.city;
	const countryCode = searchParams.countryCode;
	const coords = await fetchCoordinates(city, countryCode);
	const coordExists = coords && coords.length > 0;
	const cityMatch = coordExists && coords.find((c: any) => c.name === city);
	const currentWeather =
		coordExists && (await fetchCurrentWeather(coords[0].lat, coords[0].lon));
	if (!currentWeather) {
		notFound();
	}
	return (
		<main>
			<section>
				{currentWeather && (
					<CurrentWeather
						currentWeather={currentWeather}
						name={cityMatch ? cityMatch.name : currentWeather.name}
					/>
				)}
			</section>
		</main>
	);
}
