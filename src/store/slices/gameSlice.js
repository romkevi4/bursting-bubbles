import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isGame: false,
    isHideScore: true,
    isStart: false,
    score: 0,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        handleGame(state, action) {
            state.isGame = action.payload.isGame;
            state.isHideScore = action.payload.isHideScore;
        },

        handleScore(state, action) {
            state.score = action.payload.score;
        },

        handleTimer(state, action) {
            state.isStart = action.payload.isStart;
        },
    },
});

export const { handleGame, handleScore, handleTimer } = gameSlice.actions;
export default gameSlice.reducer;
