import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";

const CheckboxOption = ({ name, label, options = [], ...rest }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" htmlFor={name}>
        {label}
      </FormLabel>
      <Field name={name}>
        {({ field, meta }) => (
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                id={option.name}
                key={option.key}
                control={
                  <Checkbox
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                    onChange={(event) => {
                      const setValue = event.target.checked
                        ? [...field.value, option.value]
                        : field.value.filter((val) => val !== option.value);
                      field.onChange({ target: { name, value: setValue } });
                    }}
                    {...rest}
                  />
                }
                label={option.key}
              />
            ))}
            {meta.touched && meta.error && (
              <FormHelperText error>
                <ErrorMessage name={name} />
              </FormHelperText>
            )}
          </FormGroup>
        )}
      </Field>
    </FormControl>
  );
};

export default CheckboxOption;
