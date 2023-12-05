import { HighlightedCity } from '.';

const Dropdown = ({ cities, query }: { cities: any; query: string }) => {
	return (
		<div className='w-full p-2 space-y-2'>
			{cities &&
				cities.map((city: any) => (
					<HighlightedCity key={city.id} city={city} term={query} />
				))}
		</div>
	);
};

export default Dropdown;
