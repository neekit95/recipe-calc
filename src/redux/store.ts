import { configureStore } from '@reduxjs/toolkit';
import fillingsSlice from "./fillings-slice.ts";

export const store = configureStore({
	reducer: {
		fillings: fillingsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;