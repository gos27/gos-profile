import React from "react";
import { Field, ErrorMessage } from "formik";
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
      {({ field, form, meta }) => (
        <FormControl component="fieldset" error={meta.touched && !!meta.error}>
          <FormLabel component="legend">{label}</FormLabel>
          {/* ✅ Set radio buttons to display in a row */}
          <RadioGroup
            row
            {...rest}
            name={name}
            value={field.value}
            onChange={(event) => form.setFieldValue(name, event.target.value)}
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
          <FormHelperText>
            <ErrorMessage name={name} />
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

export default RadioComponent;
