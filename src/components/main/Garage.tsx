import { Layout, Divider, Flex, Typography, Card, Button } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { useCarActions } from "@/components/hooks/useCarActions";
import { stylesValue } from "@/constants/stylesValue";
import { getCars } from "@/lib/store/selectors/carsSelector";
import { removeAllCar } from "@/lib/store/slice/carsSlice";

import CreateCarForm from "./forms/CreateCarForm";
import GarageCarsForm from "./forms/GarageCarsForm";
import UpdateCarForm from "./forms/UpdateCarForm";

const { Content } = Layout;
const { Title } = Typography;

export default function GarageComponent() {
  const { t } = useTranslation();
  const cars = useSelector(getCars);
  const dispatch = useDispatch();
  const { createOneHundredCars } = useCarActions();

  return (
    <Content>
      <Divider>
        <Title level={2}>{t("mainPage.garage.settings")}</Title>
      </Divider>
      <Card style={{ width: "50%", margin: "0 50px" }}>
        <CreateCarForm />
        <UpdateCarForm />
        <Flex justify="space-between">
          <Button danger onClick={() => dispatch(removeAllCar())}>
            {t("button.removeAllCars")}
          </Button>
          <Button onClick={createOneHundredCars}>{t("button.generateCars")}</Button>
          <Button>{t("button.startRace")}</Button>
        </Flex>
      </Card>
      <Divider>
        <Title>{t("message.label.garage") + ` (${cars.length})`}</Title>
      </Divider>
      <Flex gap={stylesValue.gapLarge} vertical style={{ margin: "0 50px" }}>
        <GarageCarsForm />
      </Flex>
    </Content>
  );
}
