/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectStyled } from './styles'

const Select = () => {
  const [valueDay, setValueDay] = React.useState('10')

  const handleChange = (event: any) => {
    setValueDay(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Dias</InputLabel>
        <SelectStyled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueDay}
          label="Dias"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ontem</MenuItem>
          <MenuItem value={20}>10 Dias</MenuItem>
          <MenuItem value={30}>30 Dias</MenuItem>
          <MenuItem value={40}>60 Dias</MenuItem>
          <MenuItem value={50}>90 Dias</MenuItem>
        </SelectStyled>
      </FormControl>
    </Box>
  )
}

export default Select
