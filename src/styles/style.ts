import type { CSSProperties } from "react";

export const LayoutStyles: CSSProperties = {
  minHeight: "100vh",
};

export const ContentStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  padding: "0 var(--padding-medium)",
};
