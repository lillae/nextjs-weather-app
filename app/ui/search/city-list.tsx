import { City } from '.';
import { ICapital } from '@/lib/types/definitions';

const CityList = ({
	cities,
	query,
}: {
	cities: ICapital[] | undefined;
	query: string;
}) => {
	return (
		<div className='w-full'>
			{cities &&
				cities
					.slice(0, 8)
					.map((city) => <City key={city.id} city={city} term={query} />)}
		</div>
	);
};

export default CityList;
