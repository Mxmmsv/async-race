import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { CarValue } from "@/components/types/types";

export type CarsState = {
  selectedCar: CarValue | null;
};

const initialState: CarsState = {
  selectedCar: null,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    selectCar: (state, action: PayloadAction<CarValue | null>) => {
      state.selectedCar = action.payload;
    },
  },
});

export const { selectCar } = carsSlice.actions;

export default carsSlice.reducer;
