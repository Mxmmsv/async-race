import { configureStore } from "@reduxjs/toolkit";

import { themeMiddleware } from "./middleware/themeMiddleware";
import themeReducer from "./slice/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(themeMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
