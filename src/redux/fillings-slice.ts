import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {fillers} from "../utils/fillings.ts";


type FillerName = keyof typeof fillers;

const initialState: { selectedFiller: FillerName } = {
	selectedFiller: 'bananaCaramel',
};


const fillingsSlice = createSlice({
	name: 'fillings',
	initialState,
	reducers: {
		setSelectedFiller: (state, action: PayloadAction<FillerName>) => {
			state.selectedFiller = action.payload;
		},
	},
});

export const { setSelectedFiller } = fillingsSlice.actions;
export default fillingsSlice.reducer;