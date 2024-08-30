import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
// 1. install "Inter" font from https://fontsource.org/fonts/inter/install and import it

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
  // 2. Add a typography object with a fontFamily property (https://mui.com/material-ui/customization/typography/)
});

export default function AppTheme({ children }: React.PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
