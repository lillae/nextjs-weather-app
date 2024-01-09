const CityName = ({ text }: { text: string }) => {
	return (
		<h1 className='text-xl lg:text-3xl text-primary/60 font-normal text-center'>
			{text}
		</h1>
	);
};

export default CityName;
