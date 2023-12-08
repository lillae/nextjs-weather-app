import Link from 'next/link';

import { IoChevronBack } from 'react-icons/io5';

const BackButton = () => {
	return (
		<Link href='/' aria-label='Return to home page'>
			<IoChevronBack className='text-blue-4 text-2xl' />
		</Link>
	);
};

export default BackButton;
