import { Layout } from "antd";
import "normalize.css";

import HeaderComponent from "./components/header/Header";
import MainComponent from "./components/main/Main";
import FooterComponent from "./components/footer/Footer";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </Layout>
  );
}

export default App;
