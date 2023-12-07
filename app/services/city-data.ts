export const fetchCities = async (term: string) => {
	const url = `${process.env.NEXT_PUBLIC_REST_COUNTRIES_BASE_URL}capital/${term}?fields=capital,cca2,capitalInfo`;

	try {
		const res = await fetch(url);
		const data = await res.json();

		if (!data) {
			throw new Error('Fetching cities failed, please try again');
		}

		if (data && data.length > 0) {
			const capitalCities = data.map((d: any) => ({
				id: d.cca2,
				name: d.capital[0],
				coordinates: {
					lat: d.capitalInfo.latlng[0],
					lon: d.capitalInfo.latlng[1],
				},
			}));
			return capitalCities;
		}
	} catch (error) {
		console.log(error);
	}
};
