import { configureStore } from "@reduxjs/toolkit";

import sliceTest from "./sliceTest";

export const store = configureStore({
    reducer: {
        test: sliceTest
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;