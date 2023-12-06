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
	const currentWeather = await fetchCurrentWeather(coord[0].lat, coord[0].lon);
	console.log(currentWeather);

	return (
		<main>
			<section>
				<CurrentWeather currentWeather={currentWeather} />
			</section>
		</main>
	);
}
