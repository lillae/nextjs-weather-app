const WeatherIcon = ({ className }: { className: string }) => {
	return (
		<span className='text-blue-4 text-8xl'>
			<i className={className} />
		</span>
	);
};

export default WeatherIcon;
