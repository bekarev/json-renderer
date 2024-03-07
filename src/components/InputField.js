import React from 'react';
import { TextField } from "@mui/material";

const InputField = ({label = ''}) => {
  return (
    <TextField label={label} fullWidth/>
  );
};

export default InputField;
