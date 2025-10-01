import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, Menu, type MenuProps } from "antd";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router";

import { routesValue } from "@/constants/routes-value";
import { stylesValue } from "@/constants/styles-value";
import { getTranslation } from "@/lib/store/selectors/i18nSelectors";
import { getTheme } from "@/lib/store/selectors/themeSelectors";
import { toggleTheme } from "@/lib/store/slice/themeSlice";
import { toggleTranslation } from "@/lib/store/slice/translationSlice";

type MenuItem = Required<MenuProps>["items"][number];

const { Header } = Layout;

export default function HeaderComponent() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const translation = useSelector(getTranslation);
  const location = useLocation();

  const items: MenuItem[] = useMemo(
    () =>
      Object.values(routesValue)
        .filter((route) => route.element)
        .map((route) => ({
          label: <NavLink to={route.path}>{route.label}</NavLink>,
          key: route.path,
          icon: route.icon,
        })),
    [],
  );

  return (
    <Header>
      <Flex align="center" justify="space-between" style={{ height: "100%" }}>
        <Menu theme="dark" selectedKeys={[location.pathname]} mode="horizontal" items={items} />
        <Flex gap={stylesValue.gapSmall}>
          <Button onClick={() => dispatch(toggleTranslation())}>
            {translation === "en" ? "EN" : "RU"}
          </Button>
          <Button onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? <SunOutlined /> : <MoonOutlined />}
          </Button>
        </Flex>
      </Flex>
    </Header>
  );
}
