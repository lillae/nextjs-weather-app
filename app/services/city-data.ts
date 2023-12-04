export const getCities = async (term: string) => {
	const url = `${process.env.GEODB_BASE_URL}?minPopulation=1000000&namePrefix=${term}&limit=8`;
	//const url = `${process.env.REST_COUNTRIES_BASE_URL}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_GEODB_API_KEY}`,
			'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_GEODB_HOST}`,
		},
	};

	try {
		const res = await fetch(url, options);
		const data = await res.json();

		return data.data;
	} catch (error) {
		console.error(error);
	}
};
