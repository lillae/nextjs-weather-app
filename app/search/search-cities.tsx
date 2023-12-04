'use client';

//import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';
import { IoChevronDown } from 'react-icons/io5';

import { BackButton } from '@/app/ui/buttons';
import { SearchInput } from '@/app/ui/inputs';

const SearchCities = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	// const [searchTerm, setSearchTerm] = useState<string>('');

	// const selected = cities.map((city: any) => {
	// 	return {
	// 		value: `${city.latitude} ${city.longitude}`,
	// 		label: `${city.name} ${city.countryCode} `,
	// 	};
	// });

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className='w-full flex flex-col gap-14 relative'>
			<BackButton />
			<div className='w-full flex items-center'>
				<SearchInput
					onChange={(e) => handleSearch(e.target.value)}
					defaultValue={searchParams.get('query')?.toString()}
					placeholder='Search cities'
				/>
				<IoChevronDown className='text-white/80 text-xl -ml-[20px]' />
			</div>
		</div>
	);
};

export default SearchCities;
