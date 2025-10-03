import { Card, Flex, Typography, Button } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { stylesValue } from "@/constants/styles-value";
import { getCars } from "@/lib/store/selectors/carsSelector";
import { selectCarId } from "@/lib/store/slice/carsSlice";

export default function GarageCarsForm() {
  const cars = useSelector(getCars);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSelect = (id: string) => {
    dispatch(selectCarId({ id }));
  };

  return (
    <Flex vertical gap={8}>
      {cars.map((car, index) => (
        <Card key={`car-${car.carName}-${car.carColor}-${index}`} size="small">
          <Flex gap={stylesValue.gapSmall}>
            <Flex>
              <Button onClick={() => handleSelect(car.id)}>{t("button.selectCar")}</Button>
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
