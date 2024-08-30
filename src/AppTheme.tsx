import React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource-variable/inter";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    primary: {
      main: "#27272a",
    },
    grey: {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#e5e5e5",
      "300": "#d4d4d4",
      "400": "#a3a3a3",
      "500": "#737373",
      "600": "#525252",
      "700": "#404040",
      "800": "#262626",
      "900": "#171717",
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
  // Adjust the styles of the components below to look good in dark mode by using
  // `theme.applyStyles('dark', { ... })` to apply the styles only in dark mode.
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                border: `1px solid ${theme.palette.primary.main}`,
                boxShadow: `inset -0.75px -0.75px 0.75px #000, inset 0.75px 0.75px 0.75px rgba(255, 255, 255, 0.4)`,
                backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                backgroundColor: theme.palette.primary.light,
                "&:hover": {
                  boxShadow: `inset -0.75px -1px 0.75px #000, inset 0.75px 0 0.75px rgba(255, 255, 255, 0.4)`,
                  backgroundImage: "none",
                },
                "&:active": {
                  boxShadow: "none",
                },
              },
            },
            {
              props: { variant: "outlined", color: "primary" },
              style: {
                borderColor: theme.palette.grey[300],
                "&:hover": {
                  borderColor: theme.palette.grey[400],
                },
              },
            },
          ],
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& fieldset": {
            borderColor: theme.palette.grey[300],
          },
          "& .MuiOutlinedInput-root:not(.Mui-focused):hover fieldset": {
            borderColor: theme.palette.grey[400],
          },
        }),
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: (
          <Box
            sx={(theme) => ({
              borderRadius: "8px",
              width: "1.5rem",
              height: "1.5rem",
              border: "2px solid transparent",
              boxShadow: `inset 0px 0px 0px 1px ${theme.palette.grey[300]}`,
              ".MuiCheckbox-root:hover &, .MuiFormControlLabel-root:hover &": {
                boxShadow: `inset 0px 0px 0px 1px ${theme.palette.grey[400]}`,
              },
            })}
          />
        ),
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "initial",
          },
          ".MuiFormControlLabel-root &": {
            marginLeft: "-9px",
          },
        },
      },
    },
  },
});

export default function AppTheme({ children }: React.PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
