'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { SaveButton } from '@/ui/buttons';
import { useHighlighter } from '@/lib/hooks/useHighlighter';

type Highlighted = {
	city: any;
	term: string;
};

const HighlightedCity = ({ city, term }: Highlighted) => {
	const router = useRouter();
	const [highlightTerm] = useHighlighter();
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [activeId, setActiveId] = useState<string>('');
	const [isSaved, setIsSaved] = useState<boolean>(false);

	const clickHandler = (city: any) => {
		setIsHovered(!isHovered);
		setActiveId(city.id);
	};

	const saveHandler = (city: any) => {
		console.log(`saved: ${city.name}`);
		setIsSaved(true);
	};

	useEffect(() => {
		if (isSaved) {
			setTimeout(() => {
				setActiveId('');
				router.push('/');
			}, 1000);
		}
	}, [isSaved]);

	return (
		<div
			className={`${
				isHovered ? 'bg-blue-2/10' : ''
			} w-full cursor-pointer text-blue-4 flex items-center justify-between`}
			onClick={() => clickHandler(city)}>
			<p>{highlightTerm(city.name, term)}</p>
			{city.id === activeId && (
				<SaveButton onClick={() => saveHandler(city)}>
					{isSaved ? 'Saved' : 'Save'}
				</SaveButton>
			)}
		</div>
	);
};

export default HighlightedCity;
