import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const AddButton = () => {
	return (
		<Link href='/search'>
			<FaPlus className='text-secondary text-4xl' />
		</Link>
	);
};

export default AddButton;
