import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='w-full text-primary flex flex-col items-center justify-center my-auto pt-24 gap-6'>
			<h1 className='text-2xl'>Not Found</h1>
			<p>Could not find requested data, please try a different city</p>
			<button className='error-btn-outline'>
				<Link href='/'>Go Back</Link>
			</button>
		</div>
	);
}
