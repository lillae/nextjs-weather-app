type Save = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const SaveButton = ({ onClick }: Save) => {
	return (
		<button
			onClick={onClick}
			aria-label='Save city for quick access to local weather'
			className='bg-secondary w-fit px-4 py-1 text-white rounded-full text-sm'>
			Save
		</button>
	);
};

export default SaveButton;
