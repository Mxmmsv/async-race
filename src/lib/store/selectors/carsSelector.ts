import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../store";

const getState = (state: RootState) => state.cars;

export const getCar = createSelector([getState], (state) => state.selectedCar);
