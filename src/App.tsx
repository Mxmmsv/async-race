import { Layout } from "antd";
import "normalize.css";

import HeaderComponent from "./components/header/Header";
import MainComponent from "./components/main/Main";
import FooterComponent from "./components/footer/Footer";

import { ConfigProvider, theme } from "antd";
import { customTheme } from "@/lib/theme/theme.ts";
import { useState } from "react";

function App() {
  const [themeColor, setThemeColor] = useState<"light" | "dark">("light");

  return (
    <ConfigProvider
      theme={{
        algorithm:
          themeColor === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        ...customTheme,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
