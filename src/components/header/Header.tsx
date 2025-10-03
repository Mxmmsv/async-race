import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, Menu, Typography, type MenuProps } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router";

import { routesValue } from "@/constants/routesValue";
import { stylesValue } from "@/constants/stylesValue";
import { getTranslation } from "@/lib/store/selectors/i18nSelectors";
import { getTheme } from "@/lib/store/selectors/themeSelectors";
import { toggleTheme } from "@/lib/store/slice/themeSlice";
import { toggleTranslation } from "@/lib/store/slice/translationSlice";

type MenuItem = Required<MenuProps>["items"][number];

const { Header } = Layout;
const { Title } = Typography;

export default function HeaderComponent() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const translation = useSelector(getTranslation);
  const location = useLocation();
  const { t } = useTranslation();

  const items: MenuItem[] = useMemo(
    () => [
      {
        key: routesValue.garage.path,
        label: <NavLink to={routesValue.garage.path}>{t("message.label.garage")}</NavLink>,
        icon: routesValue.garage.icon,
      },
      {
        key: routesValue.score.path,
        label: <NavLink to={routesValue.score.path}>{t("message.label.score")}</NavLink>,
        icon: routesValue.score.icon,
      },
    ],
    [t],
  );

  return (
    <Header>
      <Flex align="center" justify="space-between" style={{ height: "100%" }}>
        <Menu
          theme="dark"
          selectedKeys={[location.pathname]}
          mode="horizontal"
          items={items}
          disabledOverflow
        />
        <Title level={2} style={{ color: "white" }}>
          {t("message.title.head")}
        </Title>
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
