type CityButton = {
	children: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CityButton = ({ children, onClick }: CityButton) => {
	return (
		<button
			onClick={onClick}
			className='text-2xl lg:text-3xl text-primary/60'
			aria-label='See weather of selected city'>
			{children}
		</button>
	);
};

export default CityButton;
