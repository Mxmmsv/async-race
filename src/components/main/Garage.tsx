import { Layout, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Content } = Layout;

export default function GarageComponent() {
  const { t } = useTranslation();
  return (
    <Content>
      <Typography.Paragraph>{t("mainPage.aboba")}</Typography.Paragraph>
    </Content>
  );
}
