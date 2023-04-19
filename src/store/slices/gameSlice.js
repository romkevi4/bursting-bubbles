import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isGame: false,
    isHideScore: true,
    isStart: false,
    score: 0,
    // stylesParameters: [],
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

        // handleCircleStyles(state, action) {
        //     state.stylesParameters.push({
        //         display: action.payload.stylesParameters.display,
        //         width: action.payload.stylesParameters.width,
        //         height: action.payload.stylesParameters.height,
        //         background: action.payload.stylesParameters.background,
        //         boxShadow: action.payload.stylesParameters.boxShadow,
        //         left: action.payload.stylesParameters.left,
        //         top: action.payload.stylesParameters.top,
        //     });
        // }
    },
});

export const {
    handleGame,
    handleScore,
    handleTimer,
    // handleCircleStyles
} = gameSlice.actions;
export default gameSlice.reducer;
