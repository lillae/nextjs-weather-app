import Image from 'next/image';

//import { IoSunnyOutline } from 'react-icons/io5';
import { WiSunset, WiSunrise } from 'react-icons/wi';
import { FaTemperatureQuarter } from 'react-icons/fa6';

import { BackButton } from '@/ui/buttons';
import { WeatherInfo } from '@/ui/weather-icons';

interface ICurrentWeather {
	currentWeather: any;
}

const CurrentWeather = ({ currentWeather }: ICurrentWeather) => {
	const { name, weather } = currentWeather;
	const weatherI = [
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
		<div className='max-w-[300px] w-full mx-auto flex flex-col gap-14'>
			<BackButton />
			<div className='w-full flex flex-col items-center gap-8'>
				<div className='w-full flex flex-col items-center gap-4'>
					<p className='text-5xl text-blue-4'>
						10
						<br />
						53
					</p>
					<h1 className='text-3xl text-primary font-semibold'>{name}</h1>
				</div>
				<div className='text-center space-y-2'>
					<Image
						src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
						alt={weather[0].description}
						width={100}
						height={100}
					/>
					<p className='text-sm'>{weather[0].description}</p>
				</div>
				<div className='w-[96px] flex flex-col items-center gap-3'>
					{weatherI.map((info, index) => (
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
