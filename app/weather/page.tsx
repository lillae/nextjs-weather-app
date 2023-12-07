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

	//Geocode API doesn't always give back the exact capital name as 1st result
	//For example 'Palais Royale' instead of 'Paris' or 'Nonthaburi' instead of Bangkok, eventhough lat/long is correct
	const cityMatch =
		coord.length >= 1 && coord.find((c: any) => c.name === city);
	const currentWeather = await fetchCurrentWeather(coord[0].lat, coord[0].lon);

	return (
		<main>
			<section>
				<CurrentWeather
					currentWeather={currentWeather}
					name={cityMatch ? cityMatch.name : currentWeather.name}
				/>
			</section>
		</main>
	);
}
