import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";

const Input = ({ label, name, ...rest }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field }) => (
          <TextField
            {...field}
            {...rest}
            fullWidth
            variant="outlined"
            label={label}
          />
        )}
      </Field>
    </div>
  );
};

export default Input;
