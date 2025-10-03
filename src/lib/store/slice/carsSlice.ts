import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { CarValue } from "@/components/types/types";

export type CarsState = {
  cars: CarValue[];
  selectedCar: CarValue | null;
};

const carsFromLS = localStorage.getItem("cars");

const initialState: CarsState = {
  cars: carsFromLS ? (JSON.parse(carsFromLS) as CarValue[]) : [],
  selectedCar: null,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addNewCar: (state, action: PayloadAction<CarValue>) => {
      state.cars.push(action.payload);
    },
    updateCar: (state, action: PayloadAction<CarValue>) => {
      const { id, ...updatedFields } = action.payload;

      state.cars = state.cars.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item,
      );

      if (state.selectedCar?.id === id) {
        state.selectedCar = null;
      }
    },
    selectCarId: (state, action: PayloadAction<Pick<CarValue, "id">>) => {
      const { id } = action.payload;
      state.selectedCar = state.cars.find((car) => car.id === id) || null;
    },
  },
});

export const { addNewCar, updateCar, selectCarId } = carsSlice.actions;

export default carsSlice.reducer;
