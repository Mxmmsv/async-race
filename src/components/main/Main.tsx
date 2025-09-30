import { Button, Typography, Flex, Layout } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ContentStyles } from "@/styles/style";

const { Content } = Layout;
const { Title } = Typography;

export default function MainComponent() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <Content style={ContentStyles}>
      <Title level={1}>Vite + React</Title>
      <Flex vertical className="card" justify="center">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <h1>{t("welcome.home")}</h1>
      </Flex>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </Content>
  );
}
