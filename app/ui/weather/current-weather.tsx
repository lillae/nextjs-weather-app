'use client';

import { WiSunset, WiSunrise, WiThermometer } from 'react-icons/wi';

import { Time, CityName, WeatherIcon, WeatherInfo } from '.';
import { BackButtonIcon } from '@/ui/elements/buttons/back-buttons';
import { getLocalTime, getLocalSunrise, getLocalSunset } from '@/utils/getTime';

interface ICurrentWeather {
	currentWeather: Record<any, any>;
	name: string;
}

const CurrentWeather = ({ currentWeather, name }: ICurrentWeather) => {
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
		<div className='w-full flex flex-col items-center gap-6'>
			<div className='weather-wrapper'>
				<BackButtonIcon />
				<Time text={currentTime} />
			</div>
			<CityName text={name} />
			<div className='weather-wrapper'>
				<div className='text-center space-y-4'>
					<WeatherIcon className={`wi wi-owm-${weather[0].id}`} />
					<p className='text-sm'>{weather[0].description}</p>
				</div>
				<div className='w-[96px] flex flex-col items-center gap-3 mx-auto'>
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
