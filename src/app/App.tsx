import "normalize.css";
import "@/styles/globals.css";

import { Layout, ConfigProvider, theme } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";

import FooterComponent from "@/components/footer/Footer";
import HeaderComponent from "@/components/header/Header";
import { routesValue } from "@/constants/routesValue";
import { getTheme } from "@/lib/store/selectors/themeSelectors";
import { customTheme } from "@/lib/theme/theme";
import { LayoutStyles } from "@/styles/style";

function App() {
  const themeColor = useSelector(getTheme);
  const { t } = useTranslation();

  return (
    <ConfigProvider
      theme={{
        algorithm: themeColor === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        cssVar: true,
        ...customTheme,
      }}
    >
      <Layout style={LayoutStyles}>
        <title>{t("message.title.head")}</title>
        <HeaderComponent />
        <Routes>
          <Route path={routesValue.root.path} element={<Navigate to={routesValue.garage.path} />} />
          {Object.values(routesValue)
            .filter((route) => route.element)
            .map((route) => (
              <Route
                key={`route-key-for-${route.label}`}
                path={route.path}
                element={route.element}
              />
            ))}
        </Routes>
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
