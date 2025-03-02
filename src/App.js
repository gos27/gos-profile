import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import NavBar from "./components/Pages/NavBar/NavBar";
import Footer from "./components/Pages/Footer/Footer";
import { ColorModeContext } from "./ThemeContext";

function App() {
  const colorMode = useContext(ColorModeContext);
  console.log("Rendering App with mode:", colorMode.mode);

  return (
    <>
      <div className="App">
        <NavBar maxWidth="lg" />
        <Container
          sx={{
            minHeight: "100vh",
            backgroundColor: (theme) => theme.palette.background.default,
            color: (theme) => theme.palette.text.primary, // Ensure text also updates
            mt: "4rem",
            flexGrow: 1,
            p: 3,
          }}
          maxWidth="lg"
        >
          <Outlet />
        </Container>
        <Footer maxWidth="lg" />
      </div>
    </>
  );
}

export default App;
