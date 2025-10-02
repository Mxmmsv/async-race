import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { CarValue } from "@/components/main/forms/types";

export type CarsState = {
  cars: CarValue[];
};

const carsFromLS = localStorage.getItem("cars");

const initialState: CarsState = {
  cars: carsFromLS ? (JSON.parse(carsFromLS) as CarValue[]) : [],
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addNewCar: (state, action: PayloadAction<CarValue>) => {
      const exists = state.cars.some(
        (car) => car.carName === action.payload.carName && car.carColor === action.payload.carColor,
      );

      if (!exists) {
        state.cars.push(action.payload);
      }
    },
  },
});

export const { addNewCar } = carsSlice.actions;

export default carsSlice.reducer;
