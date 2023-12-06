'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { AddButton, CityButton } from '@/ui/buttons';
import { useAppSelector } from '@/lib/redux/redux-hooks';
import { selectCapitals } from '@/lib/redux/features/capitals/capitals-slice';

const SelectedCities = () => {
	const selected = useAppSelector(selectCapitals);
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const router = useRouter();

	const getCoordinates = (lat: number, lon: number) => {
		const params = new URLSearchParams(searchParams);
		if (lat && lon) {
			params.set('lat', lat.toString());
			params.set('lon', lon.toString());
		} else {
			params.delete('lat', 'lon');
		}
		replace(`${pathname}?${params}`);
		console.log(lat, lon);
		router.push(`/weather?${params}`);
	};

	return (
		<section>
			<div className='flex flex-col items-center gap-4'>
				<div className='flex flex-col items-center gap-2'>
					{selected.map((city) => (
						<CityButton
							onClick={() =>
								getCoordinates(city.coordinates.lat, city.coordinates.lon)
							}
							key={city.id}>
							{city.name}
						</CityButton>
					))}
				</div>
				<AddButton />
			</div>
		</section>
	);
};

export default SelectedCities;
