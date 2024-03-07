import React from 'react';
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

const CheckboxField = ({defaultChecked = false, label = ''}) => {
  return (
    <FormControl fullWidth>
      <FormControlLabel control={<Checkbox defaultChecked={defaultChecked}/>} label={label}/>
    </FormControl>
  );
};

export default CheckboxField;
