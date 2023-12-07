import { notFound } from 'next/navigation';

export const fetchCurrentWeather = async (lat: number, lon: number) => {
	const url = `${process.env.NEXT_PUBLIC_OPENWEATHER_BASE_URL}?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily,alerts&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;

	try {
		const res = await fetch(url);
		const data = await res.json();
		if (!data) {
			notFound();
		}
		return data;
	} catch (error) {
		console.log(error);
		throw new Error('Current Weather not found in this city');
	}
};

export const fetchCoordinates = async (city: string, countryCode: string) => {
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=3&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;

	try {
		const res = await fetch(url);
		const data = await res.json();
		if (!data) {
			throw new Error('Capital not found');
		}
		return data;
	} catch (error) {
		console.log(error);
		throw new Error('Capital not found');
	}
};
