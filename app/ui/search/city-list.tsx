import { City } from '.';
import { ICapital } from '@/lib/types/definitions';

const CityList = ({ cities, query }: { cities: ICapital[]; query: string }) => {
	return (
		<div className='w-full'>
			{cities &&
				cities
					.slice(0, 8)
					.map((city, i) => <City key={city.id} city={city} term={query} />)}
		</div>
	);
};

export default CityList;
