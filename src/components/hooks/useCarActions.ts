import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";

import type { CarValue } from "@/components/types/types";
import { getCar, getCars } from "@/lib/store/selectors/carsSelector";
import { addNewCar, updateCar } from "@/lib/store/slice/carsSlice";

export function useCarActions() {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const car = useSelector(getCar);

  const addNewCarWithNotification = (carData: CarValue) => {
    const exist = cars.some(
      (car) => car.carName === carData.carName && car.carColor === carData.carColor,
    );

    if (exist) {
      notification.info({ message: "Car already exists!" });
      return;
    }

    const newCar = {
      ...carData,
      id: Date.now().toString(36),
    };

    dispatch(addNewCar(newCar));
    notification.success({ message: "Car added successfully!" });
  };

  const updateCarWithNotification = (carData: CarValue) => {
    if (!car) {
      notification.error({ message: "Car is not selected!" });
      return;
    }

    const updatedCar = {
      ...carData,
      id: car.id,
    };

    dispatch(updateCar(updatedCar));
    notification.success({ message: "Car updated successfully!" });
  };

  return { addNewCarWithNotification, updateCarWithNotification };
}
