import React from "react";
import { Field } from "formik";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";

const RadioComponent = ({ name, label, options = [], ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        const isError = Boolean(meta.touched && meta.error); // ✅ Ensure error is boolean
        return (
          <FormControl component="fieldset" error={isError}>
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
              row
              name={name}
              value={field.value || ""}
              onChange={(event) => form.setFieldValue(name, event.target.value)}
              {...rest} // ✅ Ensure `rest` does not contain `error`
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.key}
                />
              ))}
            </RadioGroup>

            {/* ✅ Correctly show validation error message inside FormHelperText */}
            {isError && <FormHelperText>{meta.error}</FormHelperText>}
          </FormControl>
        );
      }}
    </Field>
  );
};

export default RadioComponent;
