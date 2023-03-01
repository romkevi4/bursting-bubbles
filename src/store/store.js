import { configureStore } from '@reduxjs/toolkit';

import gameOptionsReducer from './slices/gameOptionsSlice';
import gameReducer from './slices/gameSlice';


const store = configureStore({
    reducer: {
        gameOptions: gameOptionsReducer,
        game: gameReducer,
    },
    devTools: true,
});

export default store;