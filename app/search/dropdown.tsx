import { HighlightedCity } from '.';

const Dropdown = ({ cities, query }: { cities: any; query: string }) => {
	return (
		<div className='w-full pl-2 py-2  space-y-1'>
			{cities &&
				cities.map((city: any) => (
					<HighlightedCity key={city.id} city={city.name} term={query} />
				))}
		</div>
	);
};

export default Dropdown;
