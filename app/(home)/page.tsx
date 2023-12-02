import { AddButton } from '@/app/ui/buttons';
import { CityListItem } from '@/app/ui/list';

export default function Home() {
	return (
		<main>
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
		</main>
	);
}
