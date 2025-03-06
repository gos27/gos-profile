import React, { useState } from "react";
import { Container, Box, Paper, Tabs, Tab, IconButton } from "@mui/material";
import SignupForm from "../Formik/SignUp";
import LoginForm from "../Formik/SignIn";
import { Brightness4 } from "@mui/icons-material";
import { useColorMode } from "../../../ThemeContext";

const Account = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { toggleColorMode } = useColorMode();

  return (
    <Container maxWidth="sm">
      {/* Dark Mode Toggle Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", py: 2 }}>
        <IconButton onClick={toggleColorMode} color="inherit">
          <Brightness4 />
        </IconButton>
      </Box>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
          centered
        >
          <Tab label="Signup" />
          <Tab label="Login" />
        </Tabs>

        {/* ✅ Only Render Active Form */}
        {tabIndex === 0 ? <SignupForm /> : <LoginForm />}
      </Paper>
    </Container>
  );
};

export default Account;
