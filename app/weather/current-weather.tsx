import { WiSunset, WiSunrise, WiThermometer } from 'react-icons/wi';

import { BackButton } from '@/ui/buttons';
import { WeatherInfo } from '@/ui/weather-icons';
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
		<div className='max-w-[300px] w-full mx-auto flex flex-col gap-14'>
			<BackButton />
			<div className='w-full flex flex-col items-center gap-8'>
				<div className='w-full flex flex-col items-center gap-4'>
					<p className='max-w-[60px] w-full text-5xl text-blue-4 text-center'>
						{currentTime}
					</p>
					<h1 className='text-3xl text-primary font-semibold'>{name}</h1>
				</div>
				<div className='text-center space-y-4'>
					<span className='text-blue-4 text-8xl'>
						<i className={`wi wi-owm-${weather[0].id}`} />
					</span>
					<p className='text-sm'>{weather[0].description}</p>
				</div>
				<div className='w-[96px] flex flex-col items-center gap-3'>
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
