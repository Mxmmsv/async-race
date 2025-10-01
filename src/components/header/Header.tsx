import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { stylesValue } from "@/lib/constants/styles-value";
import { getTranslation } from "@/lib/store/selectors/i18nSelectors";
import { getTheme } from "@/lib/store/selectors/themeSelectors";
import { toggleTheme } from "@/lib/store/slice/themeSlice";
import { toggleTranslation } from "@/lib/store/slice/translationSlice";

const { Header } = Layout;
const { Link } = Typography;

export default function HeaderComponent() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const translation = useSelector(getTranslation);

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
      <Flex gap={stylesValue.gapSmall}>
        <Button onClick={() => dispatch(toggleTranslation())}>
          {translation === "en" ? "EN" : "RU"}
        </Button>
        <Button onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? <SunOutlined /> : <MoonOutlined />}
        </Button>
      </Flex>
    </Header>
  );
}
