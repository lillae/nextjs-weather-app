'use client';

import {
	BackButtonFull,
	BackButtonOutline,
} from '@/ui/elements/buttons/back-buttons';
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
			<div className='w-full flex flex-col items-center justify-center gap-8 pt-[80px]'>
				<div className='text-center space-y-3'>
					<p className='font-normal'>An error occured..</p>
					<h1 className='text-3xl'>Please try again</h1>
				</div>
				<div className='flex items-center justify-center gap-4'>
					<BackButtonFull onClick={() => reset()} />
					<BackButtonOutline />
				</div>
			</div>
		</main>
	);
}
