export const getCities = async (term: string) => {
	const url = `${process.env.REST_COUNTRIES_BASE_URL}capital/${term}?fields=capital,cca3,capitalInfo`;

	try {
		const res = await fetch(url);
		const data = await res.json();
		if (data && term) {
			const capitalCities = data.map((d: any) => ({
				id: d.cca3,
				name: d.capital[0],
				coordinates: {
					lat: d.capitalInfo.latlng[0],
					lng: d.capitalInfo.latlng[1],
				},
			}));
			console.log(capitalCities);
			return capitalCities;
		}
	} catch (error) {
		console.error(error);
	}
};
