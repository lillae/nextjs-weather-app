'use client';

import { useHighlighter } from '@/lib/hooks/useHighlighter';
import { ICapital } from '@/lib/types/definitions';

const City = ({ city, term }: { city: ICapital; term: string }) => {
	const [highlightTerm] = useHighlighter();

	return (
		<div>
			<p>{highlightTerm(city.name, term)}</p>
		</div>
	);
};

export default City;
