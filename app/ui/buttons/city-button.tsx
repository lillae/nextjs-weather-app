type CityButtonProps = {
	children: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CityButton = ({ children, onClick }: CityButtonProps) => {
	return (
		<button onClick={onClick} className='text-3xl text-primary'>
			{children}
		</button>
	);
};

export default CityButton;
