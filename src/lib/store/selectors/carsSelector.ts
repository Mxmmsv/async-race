import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../store";

const getState = (state: RootState) => state.cars;

export const getCars = createSelector([getState], (state) => state.cars);
