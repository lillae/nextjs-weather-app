import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/app/lib/redux/redux-store';

interface ICapital {
	id: string;
	city: string;
}
const initialState: ICapital[] = [{ id: '0', city: 'Budapest' }];

export const capitalsSlice = createSlice({
	name: 'capitals',
	initialState,
	reducers: {
		addCapital: (state, action: PayloadAction<ICapital>) => {
			const { id, city } = action.payload;
			state.push({ id, city });
		},
	},
});

export const { addCapital } = capitalsSlice.actions;

export default capitalsSlice.reducer;
