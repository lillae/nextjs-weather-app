type WeatherInfo = {
	text: string;
	children: React.ReactNode;
};

const WeatherInfo = ({ text, children }: WeatherInfo) => {
	return (
		<div className='w-full flex gap-4'>
			{children}
			<p className='text-blue-3 text-left'>{text}</p>
		</div>
	);
};

export default WeatherInfo;
