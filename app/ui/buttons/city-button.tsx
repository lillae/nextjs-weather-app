import Link from 'next/link';

type CityButtonProps = {
	children: React.ReactNode;
};

const CityButton = ({ children }: CityButtonProps) => {
	return (
		<Link href='/weather' className='text-3xl text-primary'>
			{children}
		</Link>
	);
};

export default CityButton;
