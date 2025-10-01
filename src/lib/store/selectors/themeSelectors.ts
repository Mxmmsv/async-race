import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../store";

const getState = (state: RootState) => state.theme;

export const getTheme = createSelector([getState], (state) => state.theme);
