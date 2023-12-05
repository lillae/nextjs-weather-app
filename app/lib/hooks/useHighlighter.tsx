export const useHighlighter = () => {
	const highlightTerm = (cityName: string, term: string) => {
		let currentIndex = 0;
		return cityName.split('').map((cityLetters: string, index: number) => {
			const inputLetters = term[currentIndex]?.toLowerCase();

			if (cityLetters.toLowerCase() === inputLetters) {
				currentIndex++;
				return <mark key={index}>{cityLetters}</mark>;
			} else {
				return <span key={index}>{cityLetters}</span>;
			}
		});
	};
	return [highlightTerm];
};
