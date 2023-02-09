import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
}

const gameOptionsSlice = createSlice({
    name: 'gameOptions',
    initialState,
    reducers: {
        increment: state => state.value + 1,
        decrement: state => state.value - 1, // для примера increment и decrement
    },
});

export const { increment, decrement } = gameOptionsSlice.actions;
export default gameOptionsSlice.reducer;