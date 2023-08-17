import { Grid, TextField } from '@mui/material'
import React from 'react'

const Input = ({half, name, label, type, autoFocus, onChange}) => {
  return (    
    <Grid item xs={6} sm={half ? 6 : 12}>
        <TextField 
            name={name}
            label={label}
            onChange={onChange}
            variant='outlined'
            required
            fullWidth
            autoFocus={autoFocus}
            type={type}
        />
    </Grid>
  )
}

export default Input
