import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const AddButton = () => {
	return (
		<Link href='/search' aria-label='search city to add local weather'>
			<FaPlus className='text-secondary text-4xl' />
		</Link>
	);
};

export default AddButton;
