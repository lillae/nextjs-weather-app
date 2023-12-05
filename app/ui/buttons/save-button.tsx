interface ISaveButton {
	children: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SaveButton = ({ children, onClick }: ISaveButton) => {
	return (
		<button
			onClick={onClick}
			className='bg-secondary w-fit px-4 py-1 text-black/90 rounded-full text-sm'>
			{children}
		</button>
	);
};

export default SaveButton;
