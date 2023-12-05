'use client';

import { CityListItem } from '@/ui/list';
import { AddButton } from '@/ui/buttons';
import { useAppSelector } from '@/lib/redux/redux-hooks';
import { selectedCapitals } from '@/lib/redux/features/capitals/capitals-slice';

const CityList = () => {
	const selectedCities = useAppSelector(selectedCapitals);
	return (
		<section>
			<div className='flex flex-col items-center gap-4'>
				<div className='flex flex-col items-center gap-2'>
					{selectedCities.map((city) => (
						<CityListItem key={city.id}>{city.name}</CityListItem>
					))}
				</div>
				<AddButton />
			</div>
		</section>
	);
};

export default CityList;
