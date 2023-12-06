export const useHighlighter = () => {
	const highlightTerm = (cityName: string, term: string) => {
		let currentIndex = 0;
		const cityLetters = cityName.split('');

		if (cityName) {
			const match = cityLetters.map((cityLetter: string, index: number) => {
				const termLetters = term[currentIndex]?.toLowerCase();

				if (cityLetter.toLowerCase() === termLetters) {
					currentIndex++;
					return <mark key={index}>{cityLetter}</mark>;
				} else {
					return <span key={index}>{cityLetter}</span>;
				}
			});

			return match;
		}
	};
	return [highlightTerm];
};
