import { Layout, Divider, Flex, Typography, Card, Button } from "antd";
import { useTranslation } from "react-i18next";

import { useCarActions } from "@/components/hooks/useCarActions";
import { stylesValue } from "@/constants/stylesValue";
import { useRemoveAllCarMutation } from "@/lib/store/api/carsApi";

import CreateCarForm from "./forms/CreateCarForm";
import GarageCarsForm from "./forms/GarageCarsForm";
import UpdateCarForm from "./forms/UpdateCarForm";

const { Content } = Layout;
const { Title } = Typography;

export default function GarageComponent() {
  const { t } = useTranslation();

  const [removeAll] = useRemoveAllCarMutation();

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
          <Button danger onClick={() => removeAll()}>
            {t("button.removeAllCars")}
          </Button>
          <Button onClick={createOneHundredCars}>{t("button.generateCars")}</Button>
          <Button>{t("button.startRace")}</Button>
        </Flex>
      </Card>
      <Flex gap={stylesValue.gapLarge} vertical style={{ margin: "0 50px" }}>
        <GarageCarsForm />
      </Flex>
    </Content>
  );
}
