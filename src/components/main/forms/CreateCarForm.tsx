import { CarOutlined } from "@ant-design/icons";
import { Input, ColorPicker, Button, Form, Row, Col } from "antd";
import { useTranslation } from "react-i18next";

import { useCarActions } from "@/components/hooks/useCarActions";
import type { CarValue } from "@/components/types/types";

const { Item } = Form;

export default function CreateCarForm() {
  const { t } = useTranslation();
  const { addNewCarWithNotification } = useCarActions();

  const handleFinish = (formData: CarValue) => {
    addNewCarWithNotification(formData);
  };

  return (
    <Form onFinish={handleFinish} layout="horizontal">
      <Row gutter={8}>
        <Col span={16}>
          <Item
            name="name"
            label={t("message.label.createNewCar")}
            rules={[
              {
                required: true,
                message: t("message.validation.carNameInput"),
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input placeholder={t("message.placeholder.createNewCar")} prefix={<CarOutlined />} />
          </Item>
        </Col>
        <Col span={4}>
          <Item
            name="color"
            initialValue="#108ee9"
            rules={[{ required: true }]}
            getValueFromEvent={(color) => color.toHexString()}
          >
            <ColorPicker showText format="hex" style={{ width: "100%" }} />
          </Item>
        </Col>
        <Col span={4}>
          <Item>
            <Button htmlType="submit" style={{ width: "100%" }}>
              {t("button.create")}
            </Button>
          </Item>
        </Col>
      </Row>
    </Form>
  );
}
