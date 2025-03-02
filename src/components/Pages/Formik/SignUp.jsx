import { React, useState } from "react";
import { Button, Box, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { SignUpSchema } from "../schemas/Index";
import FormikControl from "../Formik/FormikControl";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialSignupValues = {
    username: "", // ✅ Added username field
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
    { label: "Back End", value: "back_end" }, // ✅ Fixed typo
    { label: "Graphic Designer", value: "graphic_designer" },
    { label: "Office Attendant", value: "office_attendant" },
    { label: "Dev Ops", value: "dev_ops" },
  ];

  const radioOptions = [
    { key: "Male", value: "option1" },
    { key: "Female", value: "option2" },
    { key: "Others", value: "options3" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JAVASCRIPT", value: "Javascript" },
    { key: "BOOTSTRAP", value: "bootstrap" },
  ];

  return (
    <Formik
      initialValues={initialSignupValues}
      validationSchema={SignUpSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Signup Data:", values);
        resetForm(); // Clears the form fields
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
            {/* ✅ Added Username Field */}
            <FormikControl
              control="input"
              type="text"
              label="Username"
              name="username"
              id="username"
              placeholder="Enter your username"
              error={errors.username && touched.username}
              helperText={touched.username && errors.username}
            />
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
              label="Date of Birth"
              name="dob"
              id="dob"
              fullWidth
            />
            <FormikControl
              control="radio"
              type="radio"
              name="radioOptions"
              id="radioOptions"
              label="How did you hear about us?"
              // placeholder="Radio Options"
              options={radioOptions}
              error={errors.radioOptions && touched.radioOptions}
              helperText={touched.radioOptions && errors.radioOptions}
            />
            <FormikControl
              control="checkbox"
              type="checkbox"
              name="checkOption"
              label="Select  Options"
              options={checkboxOptions}
            />
            <FormikControl
              control="select"
              label="Select Your Skills"
              name="position"
              placeholder="Select Your Skills"
              id="position"
              options={positionItems}
              fullWidth
              error={errors.position && touched.position}
              helperText={touched.position && errors.position}
            />
            <FormikControl
              control="input"
              type={showPassword ? "text" : "password"}
              label="Enter your password"
              name="password"
              placeholder="Enter your password"
              id="password"
              fullWidth
              error={errors.password && touched.password}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm Password"
              id="confirmPassword"
              fullWidth
              error={errors.confirmPassword && touched.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />
            <FormikControl
              control="textarea"
              type="text"
              placeholder="Enter your message here"
              label="Enter your message here"
              name="message"
            />
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
