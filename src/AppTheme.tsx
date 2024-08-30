import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource-variable/inter";

const theme = createTheme({
  palette: {
    // 1. customize the `primary.main` token with '#27272a'
    //    adjust the `primary.light` and `primary.dark` as you see fit.
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Inter Variable', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export default function AppTheme({ children }: React.PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
