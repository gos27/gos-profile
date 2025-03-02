import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField, MenuItem } from "@mui/material";

const Select = ({ label, name, options, ...rest }) => {
  const { touched, errors } = useFormikContext();
  const [field] = useField(name);

  // Show error if the field has been touched and there's an error
  const showError = touched[name] && errors[name];

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <TextField
        {...field}
        {...rest}
        id={name}
        select
        label={label}
        fullWidth
        error={Boolean(showError)}
        helperText={showError ? errors[name] : ""}
      >
        {options.map((option) => (
          <MenuItem key={option.value} id={option.name} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default Select;
