import { configureStore } from '@reduxjs/toolkit';

import gameOptionsReducer from './slices/gameOptionsSlice';


const store = configureStore({
    reducer: {
        gameOptions: gameOptionsReducer,
    },
    devTools: true,
});

export default store;