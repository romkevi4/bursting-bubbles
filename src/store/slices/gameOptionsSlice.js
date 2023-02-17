import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countdown: false,
    isStart: false,
    durationGame: 0,
};

const gameOptionsSlice = createSlice({
    name: 'gameOptions',
    initialState,
    reducers: {
        handleStartGame(state, action) {
            state.countdown = action.payload.countdown;
            state.isStart = action.payload.isStart;
            state.durationGame = action.payload.durationGame;
        },
    },
});

// const { gameOptionsActions, gameOptionsReducer } = gameOptionsSlice;

export const { handleStartGame } = gameOptionsSlice.actions;
export default gameOptionsSlice.reducer;