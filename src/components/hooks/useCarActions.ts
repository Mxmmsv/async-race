import { notification } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import type { CarValue } from "@/components/types/types";
import { oneHundredCars } from "@/constants/oneHundredCars";
import { getCar, getCars } from "@/lib/store/selectors/carsSelector";
import { addNewCar, updateCar } from "@/lib/store/slice/carsSlice";
import { randomHex } from "@/utils/colorGenerator";

export function useCarActions() {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const car = useSelector(getCar);
  const { t } = useTranslation();

  const addNewCarWithNotification = (carData: CarValue) => {
    const exist = cars.some(
      (car) => car.carName === carData.carName && car.carColor === carData.carColor,
    );

    if (exist) {
      notification.info({ message: t("message.notification.info.carExist") });
      return;
    }

    const newCar = {
      ...carData,
      id: Date.now().toString(36) + Math.random().toString(36),
    };

    dispatch(addNewCar(newCar));
    notification.success({ message: t("message.notification.success.carAdd") });
  };

  const updateCarWithNotification = (carData: CarValue) => {
    if (!car) {
      notification.error({ message: t("message.notification.error.carIsNotSelected") });
      return;
    }

    const carState = cars.find((item) => item.id === carData.id);
    if (!carState) {
      notification.error({ message: t("message.notification.error.notFound") });
      return;
    }

    if (carState.carName === carData.carName && carState.carColor === carData.carColor) {
      notification.info({ message: t("message.notification.info.carNoChange") });
      return;
    }

    dispatch(updateCar(carData));
    notification.success({ message: t("message.notification.success.carUpdate") });
  };

  const createOneHundredCars = () => {
    for (let i = 0; i < 100; i++) {
      addNewCarWithNotification({
        carName: oneHundredCars[i],
        carColor: randomHex(),
      } as CarValue);
    }
  };

  return { addNewCarWithNotification, updateCarWithNotification, createOneHundredCars };
}
