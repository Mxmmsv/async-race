import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../store";

const getState = (state: RootState) => state.translation;

export const getTranslation = createSelector([getState], (state) => state.translation);
