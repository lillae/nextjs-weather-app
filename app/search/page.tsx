import { SearchCities, CityList } from '.';
import { fetchCities } from '@/services/city-data';
import { notFound } from 'next/navigation';

export default async function Search({
	searchParams,
}: {
	searchParams?: { query?: string };
}) {
	const query = searchParams?.query || '';
	const cities = await fetchCities(query);

	return (
		<main>
			<div className='max-w-[400px] w-full flex-flex-col items-center justify-center mx-auto gap-y-6'>
				<SearchCities />
				{query !== '' && <CityList cities={cities} query={query} />}
			</div>
		</main>
	);
}
