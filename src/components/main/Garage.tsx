import { Layout, Divider, Form, Flex, Typography, Card } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { stylesValue } from "@/constants/styles-value";
import { getCars } from "@/lib/store/selectors/carsSelector";

import CreateCarForm from "./forms/CreateCarForm";

const { Content } = Layout;
const { Item } = Form;
const { Title } = Typography;

export default function GarageComponent() {
  const { t } = useTranslation();
  const cars = useSelector(getCars);

  return (
    <Content>
      <Divider>
        <Title level={2}>{t("mainPage.garage.settings")}</Title>
      </Divider>
      <Card style={{ width: "50%", margin: "0 50px" }}>
        <CreateCarForm />
        <Form>
          <Item></Item>
        </Form>
      </Card>
      <Divider>
        <Title>{t("message.label.garage") + ` (${cars.length})`}</Title>
      </Divider>
      <Flex gap={stylesValue.gapLarge} vertical style={{ margin: "0 50px" }}>
        {cars.map((car) => (
          <Card key={`car-container-with-${car.carName}-and-${car.carColor}`}>
            <Flex align="center">
              <Typography.Paragraph style={{ color: car.carColor }}>
                {car.carName}
              </Typography.Paragraph>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Content>
  );
}
