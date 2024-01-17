import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IntStateTest {
    id: number;
    answer: number | number[];
}

const initialState: IntStateTest[] = [];

const sliceTest = createSlice({
    name: "test",
    initialState,
    reducers: {
        CHANGE(state, action: PayloadAction<IntStateTest[]>) {
            state=action.payload
            return state;
        }
    },
});

export const { CHANGE} = sliceTest.actions;

export default sliceTest.reducer;
