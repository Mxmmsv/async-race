import { getTheme } from "../selectors/themeSelectors";
import { toggleTheme } from "../slice/themeSlice";

import type { Middleware } from "@reduxjs/toolkit";

export const themeMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (toggleTheme.match(action)) {
    const theme = getTheme(store.getState());
    localStorage.setItem("theme", theme);
  }

  return result;
};
