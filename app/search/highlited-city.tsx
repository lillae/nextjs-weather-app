type Highlighted = {
	city: string;
	term: string;
};

const HighlightedCity = ({ city, term }: Highlighted) => {
	const getHighlightedLetters = () => {
		return city.split('').map((cityLetter, index) => {
			const termLetter = term[index]?.toLowerCase();

			if (cityLetter.toLowerCase() === termLetter) {
				return <mark key={index}>{cityLetter}</mark>;
			} else {
				return <span key={index}>{cityLetter}</span>;
			}
		});
	};

	return (
		<p className='cursor-pointer text-blue-4'>{getHighlightedLetters()}</p>
	);
};

export default HighlightedCity;
