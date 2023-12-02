import Link from 'next/link';

type ListItemProps = {
	children: React.ReactNode;
};

const CityListItem = ({ children }: ListItemProps) => {
	return (
		<Link href='/weather' className='text-3xl text-primary'>
			{children}
		</Link>
	);
};

export default CityListItem;
