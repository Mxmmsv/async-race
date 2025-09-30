import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { stylesValue } from "@/lib/constants/styles-value";
import { getTheme } from "@/lib/store/selectors/themeSelectors";
import { toggleTheme } from "@/lib/store/slice/themeSlice";

const { Header } = Layout;
const { Link } = Typography;

export default function HeaderComponent() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const { i18n } = useTranslation();

  return (
    <Header>
      <Flex gap={stylesValue.gapSmall}>
        <Link href="https://vite.dev" target="_blank">
          Vite
        </Link>
        <Link href="https://react.dev" target="_blank">
          React
        </Link>
      </Flex>
      <Flex>
        <Button onClick={() => i18n.changeLanguage("en")}>English</Button>
        <Button onClick={() => i18n.changeLanguage("ru")}>Russian</Button>
        <Button onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? <SunOutlined /> : <MoonOutlined />}
        </Button>
      </Flex>
    </Header>
  );
}
