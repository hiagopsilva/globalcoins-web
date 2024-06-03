/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectStyled } from './styles'

type Props = {
  options: AppType.Constants[]
  label: string
  value: string | number
  onChange: (coin: any) => void
}
const Select: React.FC<Props> = ({ label, options, value, onChange }) => {
  const handleChange = (event: any) => {
    onChange(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <SelectStyled value={value} label={label} onChange={handleChange}>
          {options.map((option) => (
            <MenuItem key={option.key} value={option.value}>
              {option.key}
            </MenuItem>
          ))}
        </SelectStyled>
      </FormControl>
    </Box>
  )
}

export default Select
