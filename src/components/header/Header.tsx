import { Button, Flex, Layout, Typography } from "antd";
import { useDispatch } from "react-redux";

import { toggleTheme } from "@/lib/store/slice/themeSlice";

const { Header } = Layout;
const { Link } = Typography;

export default function HeaderComponent() {
  const dispatch = useDispatch();

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
      <Flex>
        <Button onClick={() => dispatch(toggleTheme())}>switch theme</Button>
      </Flex>
    </Header>
  );
}
