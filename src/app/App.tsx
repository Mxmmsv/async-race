import "normalize.css";
import "@/styles/globals.css";

import { Layout, ConfigProvider, theme } from "antd";
import { useSelector } from "react-redux";

import FooterComponent from "@/components/footer/Footer";
import HeaderComponent from "@/components/header/Header";
import MainComponent from "@/components/main/Main";
import { getTheme } from "@/lib/store/selectors/themeSelectors";
import { customTheme } from "@/lib/theme/theme";

import { LayoutStyles } from "../styles/style";

function App() {
  const themeColor = useSelector(getTheme);

  return (
    <ConfigProvider
      theme={{
        algorithm: themeColor === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        cssVar: true,
        ...customTheme,
      }}
    >
      <Layout style={LayoutStyles}>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
