import React from 'react'
import TextField from '@mui/material/TextField';

function Labelinputs(props) {
  return (
    <TextField
    style={{
        width:"250px",
        margin:"25px",
    }}
    autoFocus
    margin="dense"
    id={props.id}
    label={props.label}
    type={props.type}
    placeholder={props.placeholder}
    variant="standard"
    name={props.name}
    onChange={props.onChange}
  />
  )
}

export default Labelinputs