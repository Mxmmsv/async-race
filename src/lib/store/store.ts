import { configureStore } from "@reduxjs/toolkit";

import { carsMiddleware } from "./middleware/carsMiddleware";
import { themeMiddleware } from "./middleware/themeMiddleware";
import { translationMiddleware } from "./middleware/translationMiddleware";
import carsSlice from "./slice/carsSlice";
import themeReducer from "./slice/themeSlice";
import translationSlice from "./slice/translationSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    translation: translationSlice,
    cars: carsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themeMiddleware, translationMiddleware, carsMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
