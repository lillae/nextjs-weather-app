type WeatherInfo = {
	text: string;
	children: React.ReactNode;
};

const WeatherInfo = ({ text, children }: WeatherInfo) => {
	return (
		<div className='w-full flex gap-4'>
			<span className='text-3xl text-secondary text-center'>{children}</span>
			<p className='text-base lg:text-lg text-left'>{text}</p>
		</div>
	);
};

export default WeatherInfo;
