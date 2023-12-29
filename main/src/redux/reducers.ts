import { configureStore } from "@reduxjs/toolkit";
import sliceExample from "./sliceExample";

import sliceTest from "./sliceTest";

export const store = configureStore({
    reducer: {
        test: sliceTest,
        example: sliceExample
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;