import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomSelect = ({
  options = [{ label: '', value: '' }],
  defaultValue = '',
}) => {
  return (
    <FormControl
      fullWidth
      sx={{
        backgroundColor: '#f7f8fa',
        borderRadius: '30px',
        padding: '4px 12px',
      }}
    >
      <Select
        defaultValue={defaultValue}
        IconComponent={() => (
          <ExpandMoreIcon
            sx={{ color: '#007bff', position: 'absolute', left: '10px' }}
          />
        )}
        displayEmpty
        sx={{
          '& .MuiSelect-select': { paddingLeft: '40px', textAlign: 'right' },
          '& fieldset': { border: 'none' },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
