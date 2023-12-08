'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { City } from '.';
import { SaveButton } from '@/ui/elements/buttons';
import { ICapital } from '@/lib/types/definitions';
import { useAppDispatch } from '@/lib/redux/redux-hooks';
import { addCapital } from '@/lib/redux/features/capitals/capitals-slice';

const CityList = ({
	cities,
	query,
}: {
	cities: ICapital[] | undefined;
	query: string;
}) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [isSelected, setIsSelected] = useState<boolean>(false);
	const [activeId, setActiveId] = useState<string>('');

	const clickHandler = (id: string) => {
		setActiveId(id);
		setIsSelected(!isSelected);
	};

	const saveHandler = (city: ICapital) => {
		dispatch(addCapital(city));
		setActiveId('');
		setIsSelected(false);
		router.push('/');
	};
	return (
		<div className='w-full'>
			{cities &&
				cities.slice(0, 8).map((city) => {
					const check = isSelected && city.id === activeId;
					return (
						<div
							key={city.id}
							onClick={() => clickHandler(city.id)}
							className={`${
								check ? 'bg-blue-2/5' : ''
							} w-full cursor-pointer text-blue-4 flex items-center justify-between p-2`}>
							<City city={city} term={query} />
							{check && (
								<SaveButton onClick={() => saveHandler(city)}>Save</SaveButton>
							)}
						</div>
					);
				})}
		</div>
	);
};

export default CityList;
