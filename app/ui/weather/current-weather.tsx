'use client';

import { WiSunset, WiSunrise, WiThermometer } from 'react-icons/wi';

import { BackButton } from '@/ui/elements/buttons';
import { WeatherInfo } from '@/ui/weather/weather-icons';
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

	const weatherIcons = [
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
			<div className='weather-time max-w-[300px] w-full mx-auto flex flex-col gap-14'>
				<BackButton />
				<p className='max-w-[60px] w-full text-5xl text-blue-4 text-center mx-auto'>
					{currentTime}
				</p>
			</div>
			<h1 className='text-xl lg:text-3xl text-primary font-semibold text-center'>
				{name}
			</h1>
			<div className='weather-info max-w-[300px] w-full mx-auto flex flex-col gap-14'>
				<div className='text-center space-y-4'>
					<span className='text-blue-4 text-8xl'>
						<i className={`wi wi-owm-${weather[0].id}`} />
					</span>
					<p className='text-sm'>{weather[0].description}</p>
				</div>
				<div className='w-[96px] flex flex-col items-center gap-3 mx-auto'>
					{weatherIcons.map((info, index) => (
						<WeatherInfo key={index} text={info.text}>
							<span className='text-3xl text-blue-5 text-center'>
								<info.icon />
							</span>
						</WeatherInfo>
					))}
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
