import { memoize } from 'proxy-memoize';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/lib/redux/redux-store';
import { ICapital } from '@/lib/types/definitions';

const initialState: ICapital[] = [
	{ id: 'HU', name: 'Budapest', coordinates: { lat: 47.5, lon: 19.08 } },
];

export const capitalsSlice = createSlice({
	name: 'selectedCapitals',
	initialState,
	reducers: {
		addCapital: (state, action: PayloadAction<ICapital>) => {
			const { id, name, coordinates } = action.payload;
			state.push({ id, name, coordinates });
		},
	},
});

export const { addCapital } = capitalsSlice.actions;

export const selectCapitals = memoize(
	(state: RootState) => state.selectedCapitals
);

export const selectCapitalIds = memoize((state: RootState) =>
	state.selectedCapitals.map((city) => city.id)
);

export default capitalsSlice.reducer;
