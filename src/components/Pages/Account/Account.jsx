import React, { useState } from "react";
import { Container, Paper, Tabs, Tab } from "@mui/material";
import SignupForm from "../Formik/SignUp"; // Separate Signup Form
import LoginForm from "../Formik/SignIn"; // Separate Login Form

const Account = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container maxWidth="sm">
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
