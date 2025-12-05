import { notification } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import type { CarValue, CreateCarFormValue } from "@/components/types/types";
import { oneHundredCars } from "@/constants/oneHundredCars";
import { useCreateCarMutation, useUpdateCarMutation } from "@/lib/store/api/carsApi";
import { getCar } from "@/lib/store/selectors/carsSelector";
import { randomHex } from "@/utils/colorGenerator";

export function useCarActions() {
  const car = useSelector(getCar);
  const { t } = useTranslation();

  const [createCar] = useCreateCarMutation();
  const [updateCar] = useUpdateCarMutation();

  const addNewCarWithNotification = (carData: CreateCarFormValue) => {
    createCar({ ...carData, wins: 0 });
    notification.success({ message: t("message.notification.success.carAdd") });
  };

  const updateCarWithNotification = (carData: CarValue) => {
    if (car?.name === carData.name && car.color === carData.color) {
      notification.info({ message: t("message.notification.info.carNoChange") });
      return;
    }

    updateCar(carData);
    notification.success({ message: t("message.notification.success.carUpdate") });
  };

  const createOneHundredCars = () => {
    for (let i = 0; i < 100; i++) {
      addNewCarWithNotification({
        name: oneHundredCars[i],
        color: randomHex(),
      } as CarValue);
    }
  };

  return { addNewCarWithNotification, updateCarWithNotification, createOneHundredCars };
}
