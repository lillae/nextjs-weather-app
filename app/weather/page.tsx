import { CurrentWeather } from '.';
import { fetchCurrentWeather, fetchCoordinates } from '@/services/weather-data';
interface Params {
	searchParams: {
		city: string;
		countryCode: string;
	};
}

export default async function Weather({ searchParams }: Params) {
	const city = searchParams.city;
	const countryCode = searchParams.countryCode;
	const coord = await fetchCoordinates(city, countryCode);
	const lat = coord[0].lat.toFixed(2);
	const lon = coord[0].lon.toFixed(2);
	const currentWeather = await fetchCurrentWeather(lat, lon);
	console.log(currentWeather);

	return (
		<main>
			<section>
				<CurrentWeather currentWeather={currentWeather} />
			</section>
		</main>
	);
}
