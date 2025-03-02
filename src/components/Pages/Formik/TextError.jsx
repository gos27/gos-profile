import React from "react";
import { Typography } from "@mui/material";

const TextError = ({ children }) => {
  return (
    <Typography
      color="error"
      variant="body2"
      sx={{ ml: 2, mt: -1, fontSize: "12px" }}
    >
      {children}
    </Typography>
  );
};

export default TextError;
