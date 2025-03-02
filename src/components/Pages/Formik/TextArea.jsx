import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";

const TextArea = ({ label, name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div>
          <label htmlFor={name}>{label}</label>
          <TextField
            {...field}
            {...rest}
            id={name}
            fullWidth
            variant="outlined"
            label={label}
            multiline
            rows={4} // Adjust as needed
            error={meta.touched && !!meta.error}
            helperText={meta.touched && meta.error ? meta.error : ""}
          />
        </div>
      )}
    </Field>
  );
};

export default TextArea;
