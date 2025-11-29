import { getCars } from "../selectors/carsSelector";
import { addNewCar, updateCar, removeCarWithId, removeAllCar } from "../slice/carsSlice";

import type { Middleware } from "@reduxjs/toolkit";

export const carsMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    addNewCar.match(action) ||
    updateCar.match(action) ||
    removeCarWithId.match(action) ||
    removeAllCar.match(action)
  ) {
    const cars = getCars(store.getState());
    localStorage.setItem("cars", JSON.stringify(cars));
  }

  return result;
};
