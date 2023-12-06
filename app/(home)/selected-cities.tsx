'use client';

import { AddButton, CityButton } from '@/ui/buttons';
import { useAppSelector } from '@/lib/redux/redux-hooks';
import { selectedCapitals } from '@/lib/redux/features/capitals/capitals-slice';

const SelectedCities = () => {
	const selected = useAppSelector(selectedCapitals);
	return (
		<section>
			<div className='flex flex-col items-center gap-4'>
				<div className='flex flex-col items-center gap-2'>
					{selected.map((city) => (
						<CityButton key={city.id}>{city.name}</CityButton>
					))}
				</div>
				<AddButton />
			</div>
		</section>
	);
};

export default SelectedCities;
