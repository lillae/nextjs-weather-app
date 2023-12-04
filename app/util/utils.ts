export const highlightTerm = (city: string, query: string) => {
	const cityStr = city.split('');
	const queryStr = query.split('');

	const matchingLetters = cityStr.filter((element) =>
		queryStr.includes(element)
	);

	return matchingLetters;
};
