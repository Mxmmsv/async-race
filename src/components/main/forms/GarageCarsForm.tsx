import { Card, Flex, Typography, Button } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { stylesValue } from "@/constants/stylesValue";
import { getCars } from "@/lib/store/selectors/carsSelector";
import { removeCarWithId, selectCarWithId } from "@/lib/store/slice/carsSlice";

export default function GarageCarsForm() {
  const cars = useSelector(getCars);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSelect = (id: string) => {
    dispatch(selectCarWithId({ id }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeCarWithId({ id }));
  };

  return (
    <Flex vertical gap={8}>
      {cars.map((car, index) => (
        <Card key={`car-${car.carName}-${car.carColor}-${index}`} size="small">
          <Flex gap={stylesValue.gapSmall} vertical>
            <Flex gap={stylesValue.gapSmall}>
              <Button onClick={() => handleSelect(car.id)}>{t("button.selectCar")}</Button>
              <Button onClick={() => handleRemove(car.id)}>{t("button.removeCar")}</Button>
            </Flex>
            <Flex align="center" justify="space-between">
              <Typography.Paragraph
                style={{
                  color: car.carColor,
                  margin: 0,
                }}
              >
                {car.carName}
              </Typography.Paragraph>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
}
