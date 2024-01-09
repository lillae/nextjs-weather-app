'use client';

import { useEffect, useState } from 'react';

const Time = ({ text }: { text: string }) => {
	const date = new Date();
	//const hours = date.getHours();

	const [time, setTime] = useState(date);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(date);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<p className='max-w-[60px] w-full text-5xl text-secondary/80 text-center mx-auto'>
			{time.getHours()}
			<br />
			{time.getMinutes()}
		</p>
	);
};

export default Time;
