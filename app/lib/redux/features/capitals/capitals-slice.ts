import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/lib/redux/redux-store';

interface ICapital {
	id: string;
	name: string;
	coordinates: {
		lat: number;
		lng: number;
	};
}
const initialState: ICapital[] = [
	{ id: 'HUN', name: 'Budapest', coordinates: { lat: 47.5, lng: 19.08 } },
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

export const selectedCapitals = (state: RootState) => state.selectedCapitals;

export default capitalsSlice.reducer;
