import React from "react";
import { useField, useFormikContext } from "formik";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const DateInput = ({ label, name, ...rest }) => {
  const { setFieldValue, touched, errors } = useFormikContext();
  const [field] = useField(name);

  // Show error only if the field has been touched and has an error
  const showError = touched[name] && errors[name];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...field}
        {...rest}
        label={label}
        value={field.value || null}
        onChange={(date) => setFieldValue(name, date)}
        slotProps={{
          textField: {
            fullWidth: true,
            error: Boolean(showError),
            helperText: showError ? errors[name] : "",
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
