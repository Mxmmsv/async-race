import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { customTheme } from "@/lib/theme/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={customTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
