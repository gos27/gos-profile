import { React } from "react";
import { Button, Box } from "@mui/material";
import { Formik, Form } from "formik";
import { LoginSchema } from "../schemas/Index";
import FormikControl from "./FormikControl";

const SignIn = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      validateOnBlur
      validateOnChange
      onSubmit={(values) => console.log("Login Data:", values)}
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
            <FormikControl
              control="input"
              type="text"
              label="Enter your email"
              name="email"
              placeholder="Enter your email"
              id="email"
              fullWidth
              error={Boolean(errors.email && touched.email)}
              helperText={touched.email && errors.email}
            />
            <FormikControl
              control="input"
              type="password"
              label="Enter your password"
              name="password"
              placeholder="Enter your password"
              id="password"
              fullWidth
              error={Boolean(errors.password && touched.password)}
              helperText={touched.password && errors.password}
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Box>

          {/* Debugging */}
          {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
