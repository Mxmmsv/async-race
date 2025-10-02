import { CarOutlined } from "@ant-design/icons";
import { Input, ColorPicker, Button, Form, Flex } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { stylesValue } from "@/constants/styles-value";
import { addNewCar } from "@/lib/store/slice/carsSlice";

import type { CarValue } from "./types";

const { Item } = Form;

export default function CreateCarForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFinish = (values: CarValue) => {
    dispatch(addNewCar(values));
  };

  return (
    <Form onFinish={handleFinish} layout="horizontal">
      <Flex gap={stylesValue.gapSmall} align="center">
        <Item
          name="carName"
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
        <Item
          name="carColor"
          initialValue="#108ee9"
          rules={[{ required: true }]}
          getValueFromEvent={(color) => color.toHexString()}
        >
          <ColorPicker showText format="hex" />
        </Item>
        <Item>
          <Button htmlType="submit">{t("button.create")}</Button>
        </Item>
      </Flex>
    </Form>
  );
}
