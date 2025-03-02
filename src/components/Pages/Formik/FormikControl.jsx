import React from "react";
import Input from "./Input";
import DateInput from "./DateInput";
import Select from "./Select";
import Radio from "./Radio";
import CheckboxOption from "./CheckboxOption";
import TextArea from "./TextArea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "date":
      return <DateInput {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckboxOption {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
