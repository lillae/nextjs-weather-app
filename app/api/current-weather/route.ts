type Params = {
	params: {
		lat: number;
		lon: number;
	};
};

export async function GET(request: Request, { params }: Params) {
	//const { searchParams } = new URL(request.url);

	const lat = params.lat;
	const lon = params.lon;

	//const lat = searchParams.get('lat');
	//const lon = searchParams.get('lon');

	const res = await fetch(
		`${process.env.OPENWEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
	);

	const currentWeather = await res.json();

	return Response.json({ currentWeather });
}
