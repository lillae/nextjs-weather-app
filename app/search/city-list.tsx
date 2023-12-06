import { City } from '.';

const CityList = ({ cities, query }: { cities: any; query: string }) => {
	return (
		<div className='w-full space-y-2'>
			{cities &&
				cities
					.slice(0, 8)
					.map((city: any) => <City key={city.id} city={city} term={query} />)}
		</div>
	);
};

export default CityList;
