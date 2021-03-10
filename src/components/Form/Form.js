import React, { useState, useContext } from "react"
import Button from '@material-ui/core/Button';
import { Checkbox, Grid, } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Input, TextField, FormControl, FormGroup, InputLabel, Select as MuiSelect, MenuItem, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, Checkbox as MuiCheckbox } from '@material-ui/core';
import "../style.css"
import "./form.css"
import { ActionContext } from "../ActionContext";



const Form = () => {
  const action = useContext(ActionContext)

  const [values, setValues] = useState({
    ...action.data, check: false
  });


  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    action.handleStudents(values)
    setValues({})
  }

  const handleCheck = () => {
    setValues({ ...values, check: !values.check })
  }

  console.log(values)

  return <div className="card">
    <Typography component="h1" variant="h5">
      Student Details
        </Typography>
    <form className="cols" onSubmit={handleSubmit}>
      <Grid container>
        <TextField
          variant="outlined"
          label="Full Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          label="Enter email address"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="email"
          fullWidth
          required
        />
        <FormControl variant="outlined" fullWidth required>
          <InputLabel className="top">Select Batch Year</InputLabel>
          <MuiSelect
            label="Select Batch Year"
            name="batch"
            value={values.batch}
            onChange={handleChange}>
            <MenuItem value="FE">FE</MenuItem>
            <MenuItem value="SE">SE</MenuItem>
            <MenuItem value="TE">TE</MenuItem>
            <MenuItem value="BE">BE</MenuItem>
          </MuiSelect>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Select Gender</FormLabel>
          <MuiRadioGroup row
            name="gender"
            value={values.gender}
            onChange={handleChange}
          >
            <FormControlLabel key="01" value="Female" control={<Radio />} label="Female" />
            <FormControlLabel key="02" value="Male" control={<Radio />} label="Male" />
            <FormControlLabel key="03" value="Other" control={<Radio />} label="Other" />
          </MuiRadioGroup>
        </FormControl>
        <FormControl required>
          <FormControlLabel
            control={<MuiCheckbox
              name="policy"
              color="primary"
              checked={values.check}
              onChange={handleCheck}
            />}
            label="You agree to college policy"
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={(e) => handleSubmit(e)}
          disabled={!values.check || !values.gender || !values.name || !values.email || !values.batch}
        >
          Register
          </Button>
      </Grid>
    </form>
  </div>
}

export default Form