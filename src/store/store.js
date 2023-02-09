import { configureStore } from '@reduxjs/toolkit';

import gameOptionsReducer from './slices/gameOptionsSlice';


const store = configureStore({
    reducer: {
        gameOptions: gameOptionsReducer,
    },
});

export default store;