type Highlighted = {
	city: string;
	term: string;
};

const HighlightedCity = ({ city, term }: Highlighted) => {
	const highlightTerm = () => {
		let currentIndex = 0;
		return city.split('').map((cityLetters, index) => {
			const inputLetters = term[currentIndex]?.toLowerCase();

			if (cityLetters.toLowerCase() === inputLetters) {
				currentIndex++;
				return <mark key={index}>{cityLetters}</mark>;
			} else {
				return <span key={index}>{cityLetters}</span>;
			}
		});
	};

	return <p className='cursor-pointer text-blue-4'>{highlightTerm()}</p>;
};

export default HighlightedCity;
