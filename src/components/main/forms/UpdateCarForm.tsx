import { CarOutlined } from "@ant-design/icons";
import { ColorPicker, Form, Input, Button, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useCarActions } from "@/components/hooks/useCarActions";
import type { CarValue } from "@/components/types/types";
import { getCar } from "@/lib/store/selectors/carsSelector";

const { Item } = Form;

export default function UpdateCarForm() {
  const car = useSelector(getCar);
  const { t } = useTranslation();
  const { updateCarWithNotification } = useCarActions();

  const handleFinish = (formData: CarValue) => {
    updateCarWithNotification(formData);
  };

  return (
    <Form
      disabled={!car}
      layout="horizontal"
      onFinish={handleFinish}
      fields={
        car
          ? [
              { name: ["id"], value: car.id },
              { name: ["carName"], value: car.carName },
              { name: ["carColor"], value: car.carColor },
            ]
          : []
      }
    >
      <Row gutter={8}>
        <Col span={16}>
          <Item
            name="carName"
            label={t("message.label.updateCar")}
            rules={[
              {
                required: true,
                message: t("message.validation.carNameInput"),
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input
              placeholder={t("message.placeholder.updateCarName")}
              prefix={<CarOutlined style={{ color: car?.carColor }} />}
            />
          </Item>
        </Col>
        <Col span={4}>
          <Item
            name="carColor"
            initialValue="#FFF"
            getValueFromEvent={(color) => color.toHexString()}
          >
            <ColorPicker showText format="hex" style={{ width: "100%" }} />
          </Item>
        </Col>
        <Item name="id" hidden>
          <Input />
        </Item>
        <Col span={4}>
          <Item>
            <Button htmlType="submit" style={{ width: "100%" }}>
              {t("button.update")}
            </Button>
          </Item>
        </Col>
      </Row>
    </Form>
  );
}
