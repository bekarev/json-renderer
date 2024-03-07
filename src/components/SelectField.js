import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectField = ({label = "", options = []}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
      >
        {options.map((option) => <MenuItem value={option.value} key={option.value}>{option.name}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default SelectField;
