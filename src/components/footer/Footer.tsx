import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Link, Paragraph } = Typography;

export default function FooterComponent() {
  return (
    <Footer>
      <Link href="https://www.google.com/">
        <Paragraph>Wanna Google?</Paragraph>
      </Link>
    </Footer>
  );
}
