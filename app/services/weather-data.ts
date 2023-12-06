export const fetchCurrentWeather = async (lat: number, lon: number) => {
	const url = `${process.env.OPENWEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;

	try {
		const res = await fetch(url);
		const data = await res.json();

		return data;
	} catch (error) {
		console.error(error);
	}
};

export const fetchCoordinates = async (city: string, countryCode: string) => {
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=1&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;

	try {
		const res = await fetch(url);
		const data = await res.json();

		return data;
	} catch (error) {
		console.error(error);
	}
};
