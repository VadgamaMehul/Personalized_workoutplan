import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice.js';

const store = configureStore({
	reducer: {
		workout: dataSlice,
	},
});

export default store;