// src/styles/theme.ts
const theme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#64748b",
    danger: "#ef4444",
    success: "#10b981",
    warning: "#f59e0b",
    background: "#f9fafb",
    textPrimary: "#111827",
    textSecondary: "#6b7280",
    white: "#ffffff",
  },
  fonts: {
    body: [
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
    heading: [
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
    mono: ["Menlo", "Monaco", "Consolas", "Courier New", "monospace"].join(","),
  },
  fontSize: {
    xs: "8px",
    sm: "10px",
    md: "12px",
    base: "14px",
    lg: "16px",
    xl: "18px",
    h2: "20px",
    h1: "24px",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};

export default theme;

export type ThemeType = typeof theme;
