export const getCities = async (term: string) => {
	const url = `${process.env.REST_COUNTRIES_BASE_URL}/capital/${term}?fields=capital,cca3,capitalInfo`;

	try {
		const res = await fetch(url);
		const data = await res.json();
		if (term) {
			const capitalCities = data.map((d: any) => ({
				name: d.capital[0],
				coordinates: {
					lat: d.capitalInfo.latlng[0],
					lng: d.capitalInfo.latlng[1],
				},
				id: d.cca3,
			}));
			return capitalCities;
		}
	} catch (error) {
		console.error(error);
	}
};
