import { getTheme } from "../selectors/themeSelectors";
import { toggleTheme, setTheme } from "../slice/themeSlice";

import type { Middleware } from "@reduxjs/toolkit";

export const themeMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (toggleTheme.match(action) || setTheme.match(action)) {
    const theme = getTheme(store.getState());
    localStorage.setItem("theme", theme);
  }

  return result;
};
