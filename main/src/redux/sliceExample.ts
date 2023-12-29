import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = -1;

const sliceExample = createSlice({
    name: "example",
    initialState,
    reducers: {
        changeEx: (state: number, action: PayloadAction<number>) => {
            state = action.payload;
            return state;
        },
    },
});

export const { changeEx } = sliceExample.actions;

export default sliceExample.reducer;
