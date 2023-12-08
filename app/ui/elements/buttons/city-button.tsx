type CityButtonProps = {
	children: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CityButton = ({ children, onClick }: CityButtonProps) => {
	return (
		<button onClick={onClick} className='text-2xl lg:text-3xl text-primary'>
			{children}
		</button>
	);
};

export default CityButton;
