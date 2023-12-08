'use client';

import { useAppSelector } from '@/lib/redux/redux-hooks';
import { selectCapitalIds } from '@/lib/redux/features/capitals/capitals-slice';
import { useHighlighter } from '@/lib/hooks/useHighlighter';
import { ICapital } from '@/lib/types/definitions';

const City = ({ city, term }: { city: ICapital; term: string }) => {
	const selectedIds = useAppSelector(selectCapitalIds);
	const filteredCities = !selectedIds.includes(city.id);
	const [highlightTerm] = useHighlighter();

	return (
		<>
			{filteredCities && (
				<div>
					<p>{highlightTerm(city.name, term)}</p>
				</div>
			)}
		</>
	);
};

export default City;
