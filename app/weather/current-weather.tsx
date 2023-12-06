import { IoSunnyOutline } from 'react-icons/io5';
import { WiSunset, WiSunrise } from 'react-icons/wi';
import { FaTemperatureQuarter } from 'react-icons/fa6';

import { BackButton } from '@/ui/buttons';
import { WeatherInfo } from '@/ui/weather-icons';

const CurrentWeather = () => {
	const weather = [
		{
			icon: FaTemperatureQuarter,
			text: '24 C',
		},
		{
			icon: WiSunrise,
			text: '04:48',
		},
		{
			icon: WiSunset,
			text: '20:10',
		},
	];

	return (
		<div className='max-w-[200px] w-full mx-auto flex flex-col gap-14'>
			<BackButton />
			<div className='w-full flex flex-col items-center gap-8'>
				<div className='w-full flex flex-col items-center gap-4'>
					<p className='text-5xl text-blue-4'>
						10
						<br />
						53
					</p>
					<h1 className='text-3xl text-primary'>Budapest</h1>
				</div>
				<div className='text-center space-y-2'>
					<IoSunnyOutline className='text-8xl text-blue-3' />
					<p className='text-sm'>Clear sky</p>
				</div>
				<div className='w-[96px] flex flex-col items-center gap-3'>
					{weather.map((info, index) => (
						<WeatherInfo key={index} text={info.text}>
							<info.icon className='text-3xl text-blue-5 text-center' />
						</WeatherInfo>
					))}
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
