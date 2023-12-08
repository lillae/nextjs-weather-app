const CityName = ({ text }: { text: string }) => {
	return (
		<h1 className='text-xl lg:text-3xl text-primary font-semibold text-center'>
			{text}
		</h1>
	);
};

export default CityName;
