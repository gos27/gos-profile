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
                  default: "#ffffff", // White
                  paper: "#f5f5f5", // Light gray
                },
                text: {
                  primary: "#000000", // Black text for readability
                  secondary: "#333333", // Dark gray for subtitles
                },
                button: {
                  main: "#1976d2", // Blue buttons
                  contrastText: "#ffffff", // White text on buttons
                },
              }
            : {
                background: {
                  default: "#0d0d0d", // Dark gray (better contrast)
                  paper: "#1a1a1a", // Slightly lighter dark gray for cards
                },
                text: {
                  primary: "#ffffff", // Pure white for readability
                  secondary: "#b3b3b3", // Light gray for subtitles
                },
                button: {
                  main: "#ff9800", // Bright orange buttons for visibility
                  contrastText: "#000000", // Dark text on buttons
                },
              }),
        },
        typography: {
          h1: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: mode === "light" ? "#000000" : "#ffeb3b", // Black in light mode, yellow in dark mode
          },
          h2: {
            fontSize: "2rem",
            fontWeight: "bold",
            color: mode === "light" ? "#000000" : "#ffeb3b", // Similar to h1
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: mode === "light" ? "#1976d2" : "#ff9800",
                color: mode === "light" ? "#ffffff" : "#000000",
                "&:hover": {
                  backgroundColor: mode === "light" ? "#1565c0" : "#e68900",
                },
              },
            },
          },
          MuiAccordionSummary: {
            styleOverrides: {
              root: {
                backgroundColor: mode === "light" ? "#f0f0f0" : "#333333",
                color: mode === "light" ? "#000000" : "#333", // High contrast text
                fontWeight: "bold",
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
