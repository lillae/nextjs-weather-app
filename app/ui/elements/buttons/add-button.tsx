import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const AddButton = () => {
	return (
		<Link href='/search' aria-label='search city to add local weather'>
			<FaPlus
				className='text-secondary text-4xl'
				aria-label='search city to add local weather'
			/>
		</Link>
	);
};

export default AddButton;
