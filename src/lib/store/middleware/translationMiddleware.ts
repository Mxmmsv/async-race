import i18n from "@/lib/i18n/i18n";

import { getTranslation } from "../selectors/i18nSelectors";
import { toggleTranslation } from "../slice/translationSlice";

import type { Middleware } from "@reduxjs/toolkit";

export const translationMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (toggleTranslation.match(action)) {
    const translation = getTranslation(store.getState());
    i18n.changeLanguage(translation);
    localStorage.setItem("translation", translation);
  }

  return result;
};
