import { Card, Flex, Typography, Button, Pagination, Skeleton, Divider } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import type { CarValue } from "@/components/types/types";
import { CARS_PER_PAGE } from "@/constants/env";
import { stylesValue } from "@/constants/stylesValue";
import { useGetCarsQuery, useRemoveCarWithIdMutation } from "@/lib/store/api/carsApi";
import { selectCar } from "@/lib/store/slice/carsSlice";
import type { AppDispatch } from "@/lib/store/store";

const { Title, Paragraph } = Typography;

export default function GarageCarsForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [remove] = useRemoveCarWithIdMutation();

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useGetCarsQuery({ page: currentPage, limit: CARS_PER_PAGE });

  const cars = data?.cars || [];
  const totalCount = data?.totalCount || 0;

  const handleSelect = (car: CarValue) => {
    dispatch(selectCar(car));
  };

  const handleRemove = (id: number) => {
    remove({ id });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // if (error) {
  //   return <Alert message={error} type="error" />;
  // }

  return (
    <Flex vertical gap={8}>
      <Divider>
        <Title>{t("message.label.garage") + ` (${totalCount})`}</Title>
      </Divider>
      <Pagination
        align="center"
        current={currentPage}
        total={totalCount || 0}
        pageSize={CARS_PER_PAGE}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
      {isLoading ? (
        <Card size="small">
          <Skeleton active paragraph={{ rows: 1 }} />
        </Card>
      ) : (
        cars.map((car, index) => (
          <Card key={`car-${car.name}-${car.color}-${index}`} size="small">
            <Flex gap={stylesValue.gapSmall} vertical>
              <Flex gap={stylesValue.gapSmall}>
                <Button onClick={() => handleSelect(car)}>{t("button.selectCar")}</Button>
                <Button danger onClick={() => handleRemove(car.id)}>
                  {t("button.removeCar")}
                </Button>
              </Flex>
              <Flex align="center" justify="space-between">
                <Paragraph
                  style={{
                    color: car.color,
                    margin: 0,
                  }}
                >
                  {car.name}
                </Paragraph>
              </Flex>
            </Flex>
          </Card>
        ))
      )}
      <Pagination
        align="center"
        current={currentPage}
        total={totalCount || 0}
        pageSize={CARS_PER_PAGE}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </Flex>
  );
}
