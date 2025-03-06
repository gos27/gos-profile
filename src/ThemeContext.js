import { createContext, useContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext();

export function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    console.log("Theme toggled. New mode:", mode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#FAFAFA",
                  paper: "#FFFFFF",
                },
                text: {
                  primary: "#212121",
                  secondary: "#757575",
                },
                primary: {
                  main: "#1976D2",
                },
                button: {
                  main: "#1976D2",
                  contrastText: "#FFFFFF",
                },
              }
            : {
                background: {
                  default: "#121212", // Deep charcoal
                  paper: "#1E1E1E", // Dark gray
                },
                text: {
                  primary: "#E0E0E0", // Light gray
                  secondary: "#B3B3B3", // Muted gray
                },
                primary: {
                  main: "#00A6FB", // Cyan
                },
                secondary: {
                  main: "#FF4081", // Muted pink
                },
                button: {
                  main: "#00A6FB", // Cyan button
                  contrastText: "#000000",
                },
              }),
        },
        typography: {
          fontFamily: "Poppins, Arial, sans-serif",
          h1: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: mode === "light" ? "#212121" : "#00A6FB",
          },
          h2: {
            fontSize: "2rem",
            fontWeight: "bold",
            color: mode === "light" ? "#212121" : "#FF4081",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: mode === "light" ? "#1976D2" : "#00A6FB",
                color: mode === "light" ? "#FFFFFF" : "#000000",
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: mode === "light" ? "#1565C0" : "#008CDB",
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: mode === "light" ? "#FFFFFF" : "#1E1E1E",
                borderRadius: "12px",
                boxShadow:
                  mode === "light"
                    ? "0px 4px 10px rgba(0,0,0,0.1)"
                    : "0px 4px 10px rgba(255,255,255,0.1)",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ThemeProviderWrapper");
  }
  return context;
}
