import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource-variable/inter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27272a",
    },
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
  // Use this template (https://mui.com/material-ui/getting-started/templates/sign-in/) as an expected result.
  // 1. Target `components.MuiButton.styleOverrides.root` to theme the Button component
  //    (https://mui.com/material-ui/customization/theme-components/#theme-style-overrides)
  //
  // 2. Customize only the combination of `contained` variant + `primary` color
  //    (https://mui.com/material-ui/customization/theme-components/#variants)
});

export default function AppTheme({ children }: React.PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
