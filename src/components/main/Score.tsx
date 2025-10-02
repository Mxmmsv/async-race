import { Divider, Layout, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Content } = Layout;
const { Title } = Typography;

export default function ScoreComponent() {
  const { t } = useTranslation();
  return (
    <Content>
      <Divider>
        <Title level={2}>{t("message.label.score")}</Title>
      </Divider>
    </Content>
  );
}
