'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '@/lib/redux/redux-hooks';
import {
	addCapital,
	selectCapitalIds,
} from '@/lib/redux/features/capitals/capitals-slice';
import { useHighlighter } from '@/lib/hooks/useHighlighter';
import { SaveButton } from '@/ui/elements/buttons';

type City = {
	city: any;
	term: string;
};

const City = ({ city, term }: City) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const selectedIds = useAppSelector(selectCapitalIds);
	const filteredCities = !selectedIds.includes(city.id);
	const [highlightTerm] = useHighlighter();

	const [isSelected, setIsSelected] = useState<boolean>(false);
	const [activeId, setActiveId] = useState<string>('');

	const clickHandler = (city: any) => {
		setIsSelected(!isSelected);
		setActiveId(city.id);
	};

	const saveHandler = (city: any) => {
		dispatch(addCapital(city));
		setActiveId('');
		router.push('/');
	};

	return (
		<>
			{filteredCities && (
				<div
					className={`${
						isSelected ? 'bg-blue-2/5' : ''
					} w-full cursor-pointer text-blue-4 flex items-center justify-between p-2`}
					onClick={() => clickHandler(city)}>
					<p>{highlightTerm(city.name, term)}</p>
					{city.id === activeId && isSelected && (
						<SaveButton onClick={() => saveHandler(city)}>Save</SaveButton>
					)}
				</div>
			)}
		</>
	);
};

export default City;
