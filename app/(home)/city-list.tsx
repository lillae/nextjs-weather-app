import { CityListItem } from '@/ui/list';
import { AddButton } from '@/ui/buttons';

const CityList = () => {
	return (
		<section>
			<div className='flex flex-col items-center gap-4'>
				<div className='flex flex-col items-center gap-2'>
					<CityListItem>Budapest</CityListItem>
					<CityListItem>Kabul</CityListItem>
					<CityListItem>Kuala Lumpur</CityListItem>
				</div>
				<AddButton />
			</div>
		</section>
	);
};

export default CityList;
