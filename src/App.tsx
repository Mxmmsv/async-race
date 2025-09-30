import "./styles/globals.css";
import "normalize.css";

import { Button, Layout, ConfigProvider, theme } from "antd";
import { useState } from "react";

import FooterComponent from "@/components/footer/Footer";
import HeaderComponent from "@/components/header/Header";
import MainComponent from "@/components/main/Main";
import { customTheme } from "@/lib/theme/theme";

import { LayoutStyles } from "./styles/style";

function App() {
  const [themeColor, setThemeColor] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light",
  );

  const toggleTheme = () => {
    setThemeColor((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

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
        <Button onClick={toggleTheme}>switch theme</Button>
        <MainComponent />
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
