import { configureStore } from "@reduxjs/toolkit";

import { themeMiddleware } from "./middleware/themeMiddleware";
import { translationMiddleware } from "./middleware/translationMiddleware";
import themeReducer from "./slice/themeSlice";
import translationSlice from "./slice/translationSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    translation: translationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themeMiddleware, translationMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
