import { SelectedCities } from '.';
//import { fetchCoordinates } from '@/services/weather-data';

export default async function Home() {
	//const coord = await fetchCoordinates();

	return (
		<main>
			<SelectedCities />
		</main>
	);
}
