'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { AddButton, CityButton } from '@/ui/elements/buttons';
import { useAppSelector } from '@/lib/redux/redux-hooks';
import { selectCapitals } from '@/lib/redux/features/capitals/capitals-slice';
import { getEngLetters } from '@/utils/utils';

const SelectedCities = () => {
	const selected = useAppSelector(selectCapitals);
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const router = useRouter();

	const getCityInfo = (cityName: string, countryCode: string) => {
		const params = new URLSearchParams(searchParams);
		if (cityName && countryCode) {
			params.set('city', getEngLetters(cityName));
			params.set('countryCode', countryCode);
		} else {
			params.delete('city', 'countryCode');
		}
		replace(`${pathname}?${params}`);
		router.push(`/weather?${params}`);
	};

	return (
		<section>
			<div className='flex flex-col items-center gap-4 pt-[80px]'>
				<div className='flex flex-col items-center gap-2'>
					{selected.map((city) => (
						<CityButton
							onClick={() => getCityInfo(city.name, city.id)}
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
