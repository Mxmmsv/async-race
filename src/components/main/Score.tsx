import { Layout, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Content } = Layout;

export default function ScoreComponent() {
  const { t } = useTranslation();
  return (
    <Content>
      <Typography.Paragraph>{t("mainPage.abobaSmall")}</Typography.Paragraph>
    </Content>
  );
}
