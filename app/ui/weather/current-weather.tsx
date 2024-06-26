'use client';

import { WiSunset, WiSunrise, WiThermometer } from 'react-icons/wi';

import { Time, CityName, WeatherIcon, WeatherInfo } from '.';
import { BackButtonIcon } from '@/ui/elements/buttons/back-buttons';
import { getLocalTime, getLocalSunrise, getLocalSunset } from '@/utils/getTime';
import { ICurrentWeather } from '@/lib/types/definitions';

const CurrentWeather = ({
	currentWeather,
	name,
}: {
	currentWeather: ICurrentWeather;
	name: string;
}) => {
	const { weather, timezone, sys, main } = currentWeather;
	const timezoneInMinutes = timezone / 60;
	const currentTime = getLocalTime(timezoneInMinutes);
	const sunrise = getLocalSunrise(sys.sunrise, timezone);
	const sunset = getLocalSunset(sys.sunset, timezone);
	const temperature = Math.round(main.temp);

	const weatherMap = [
		{
			icon: WiThermometer,
			text: `${temperature} °C`,
		},
		{
			icon: WiSunrise,
			text: sunrise,
		},
		{
			icon: WiSunset,
			text: sunset,
		},
	];

	return (
		<div className='w-full flex flex-col items-center'>
			<div className='weather-wrapper gap-14 mb-2'>
				<BackButtonIcon />
				<Time time={currentTime} />
			</div>
			<CityName text={name} />
			<div className='weather-wrapper gap-6 mt-6'>
				<div className='text-center space-y-4'>
					<WeatherIcon className={`wi wi-owm-${weather[0].id}`} />
					<p className='text-sm'>{weather[0].description}</p>
				</div>
				<div className='w-[96px] flex flex-col items-center gap-2 mx-auto'>
					{weatherMap.map((info, index) => (
						<WeatherInfo key={index} text={info.text}>
							<info.icon />
						</WeatherInfo>
					))}
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
