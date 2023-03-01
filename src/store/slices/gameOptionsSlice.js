import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCountdown: false,
    isDisplay: false,
    durationGame: 0,
};

const gameOptionsSlice = createSlice({
    name: 'gameOptions',
    initialState,
    reducers: {
        handleCountdown(state, action) {
            state.isCountdown = action.payload.isCountdown;
        },

        handleDisplayCircles(state, action) {
            state.isDisplay = action.payload.isDisplay;
        },

        handleDurationGame(state, action) {
            state.durationGame = action.payload.durationGame;
        },
    },
});

export const { handleCountdown, handleDisplayCircles, handleDurationGame } = gameOptionsSlice.actions;
export default gameOptionsSlice.reducer;
