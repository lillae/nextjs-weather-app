import Link from 'next/link';

import { IoChevronBack } from 'react-icons/io5';

type BackButtonProps = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const BackButtonIcon = () => {
	return (
		<Link href='/' aria-label='Return to home page'>
			<IoChevronBack className='text-blue-4 text-2xl' />
		</Link>
	);
};

export const BackButtonOutline = () => {
	return (
		<button className='error-btn-outline'>
			<Link href='/' aria-label='Return to home page'>
				Go Back
			</Link>
		</button>
	);
};

export const BackButtonFull = ({ onClick }: BackButtonProps) => {
	return (
		<button onClick={onClick} className='error-btn-full' aria-label='Try again'>
			Try again
		</button>
	);
};
