import { Flex, Layout, Typography } from "antd";

const { Header } = Layout;
const { Link } = Typography;

export default function HeaderComponent() {
  return (
    <Header>
      <Flex justify="center">
        <Link href="https://vite.dev" target="_blank">
          Vite
        </Link>
        <Typography.Link href="https://react.dev" target="_blank">
          React
        </Typography.Link>
      </Flex>
    </Header>
  );
}
