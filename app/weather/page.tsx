import { CurrentWeather } from '.';
import { fetchCurrentWeather } from '@/services/weather-data';
interface Params {
	searchParams: {
		lat: number;
		lon: number;
	};
}

export default async function Weather({ searchParams }: Params) {
	const lat = searchParams.lat;
	const lon = searchParams.lon;
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
