import { Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import { Button, Box, Container, IconButton, Paper } from "@mui/material";
import { Formik, Form } from "formik";
import { SignUpSchema } from "../schemas/Index";
import FormikControl from "../Formik/FormikControl";
import { Brightness4 } from "@mui/icons-material";
import { useColorMode } from "../../../ThemeContext";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const { toggleColorMode } = useColorMode();

  const initialSignupValues = {
    username: "",
    name: "",
    email: "",
    dob: null,
    radioOptions: "",
    password: "",
    checkOption: [],
    confirmPassword: "",
    position: "",
    message: "",
  };

  const positionItems = [
    { label: "Front End", value: "front_end" },
    { label: "Back End", value: "back_end" },
    { label: "Graphic Designer", value: "graphic_designer" },
    { label: "Office Attendant", value: "office_attendant" },
    { label: "Dev Ops", value: "dev_ops" },
  ];

  const radioOptions = [
    { key: "Google", value: "optionGoogle" },
    { key: "TV", value: "optionTV" },
    { key: "News Paper", value: "optionsPaper" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JAVASCRIPT", value: "javascript" },
    { key: "BOOTSTRAP", value: "bootstrap" },
  ];

  return (
    <Container maxWidth="sm">
      {/* Dark Mode Toggle Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", py: 2 }}>
        <IconButton onClick={toggleColorMode} color="inherit">
          <Brightness4 />
        </IconButton>
      </Box>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        {" "}
        <Formik
          initialValues={initialSignupValues}
          validationSchema={SignUpSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Signup Data:", values);
            setOpen(true); // Open Snackbar
            resetForm(); // Clear the form after submission
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Snackbar
                  open={open}
                  autoHideDuration={4000} // Hide after 4 seconds
                  onClose={() => setOpen(false)}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <Alert
                    onClose={() => setOpen(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Form submitted successfully!
                  </Alert>
                </Snackbar>
                <FormikControl
                  control="input"
                  type="text"
                  label="Full Name"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  error={errors.name && touched.name}
                  helperText={touched.name && errors.name}
                />
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  error={errors.email && touched.email}
                  helperText={touched.email && errors.email}
                />
                <FormikControl
                  control="date"
                  label="Appointment Date"
                  name="dob"
                  id="dob"
                  fullWidth
                  error={errors.dob && touched.dob}
                  helperText={touched.dob && errors.dob}
                />
                <FormikControl
                  control="date"
                  name="birthdate"
                  label="Select your birthdate"
                />
                <FormikControl
                  control="radio"
                  label="How did you hear about us?"
                  name="radioOptions"
                  id="radioOptions"
                  options={radioOptions}
                  error={errors.radioOptions && touched.radioOptions}
                  helperText={touched.radioOptions && errors.radioOptions}
                />
                <FormikControl
                  control="checkbox"
                  label="Select Your Skills"
                  name="checkOption"
                  options={checkboxOptions}
                  error={errors.checkOption && touched.checkOption}
                  helperText={touched.checkOption && errors.checkOption}
                />
                <FormikControl
                  control="select"
                  label="Select Position"
                  name="position"
                  id="position"
                  options={positionItems}
                  fullWidth
                  error={errors.position && touched.position}
                  helperText={touched.position && errors.position}
                />
                <FormikControl
                  control="textarea"
                  type="text"
                  label="Enter your message here"
                  placeholder="Enter your message here"
                  name="message"
                  error={errors.message && touched.message}
                  helperText={touched.message && errors.message}
                />
                <Button type="submit" variant="contained" color="primary">
                  Signup
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Contact;
