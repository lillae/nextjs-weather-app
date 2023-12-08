'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main>
			<div className='w-full flex flex-col items-center justify-center gap-8 mt-24'>
				<div className='text-center space-y-3'>
					<p className='font-normal'>An error occured..</p>
					<h1 className='text-3xl'>Please try again</h1>
				</div>
				<div className='flex items-center justify-center gap-4'>
					<button onClick={() => reset()} className='error-btn-full'>
						Try again
					</button>
					<button className='error-btn-outline'>
						<Link href='/' aria-label='Return to home page'>
							Go Back
						</Link>
					</button>
				</div>
			</div>
		</main>
	);
}
