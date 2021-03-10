import React, { useState, useContext } from "react"
import Button from '@material-ui/core/Button';
import { Grid, Box, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { TextField, FormControl, InputLabel, Select as MuiSelect, MenuItem, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, Checkbox as MuiCheckbox } from '@material-ui/core';
import "../style.css"
import "./form.css"
import { ActionContext } from "../ActionContext"
import uuid from 'react-uuid'
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { cities } from "./cities"


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    margin: 15
  },
  formSelect: {
    margin: theme.spacing(1),
    minWidth: 400,
    margin: 15,
    marginTop: -1
  }
}));

const Form = ({ stuName, email, batch, city, gender, uid, edit, setClose }) => {
  const action = useContext(ActionContext)
  const defaultProps = {
    options: cities
  };

  const [values, setValues] = useState({
    stuName: stuName,
    email: email,
    batch: batch,
    city: city,
    gender: gender,
    check: false,
  });
  const classes = useStyles();


  const handleChange = e => {

    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit) {
      action.edit(uid, values.stuName, values.email, values.batch, values.city, values.gender, values.city)
      setClose()
    }
    else {
      action.handleStudents({ ...values, uid: uuid() })
    }
    setValues({ stuName: '', email: '', batch: '', city: '', gender: '', check: false })
  }

  const handleCheck = () => {
    setValues({ ...values, check: !values.check })
  }


  return <div className="card">
    <Box m={2} textAlign="center" fontFamily="Monospace" fontWeight="fontWeightMedium" style={{ color: "#444444" }}>
      <Typography component="h1" variant="h5">
        Student Registeration Form
        </Typography>
    </Box>
    <Divider variant="middle" />
    <form className="cols center" onSubmit={handleSubmit}>
      <Grid container>
        <Box className={classes.formControl}>
          <TextField
            label="Enter Full Name"
            name="stuName"
            value={values.stuName}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box className={classes.formControl}>
          <TextField
            label="Enter email address"
            name="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            fullWidth
            required
          />
        </Box>
        <Box fullWidth className={classes.formSelect}>
          <FormControl fullWidth required>
            <Box p={2}>
              <InputLabel className="top">Select Batch Year</InputLabel>
            </Box>
            <MuiSelect
              label="Select Batch Year"
              name="batch"
              value={values.batch ? values.batch : ""}
              onChange={handleChange}>
              <MenuItem value="FE">FE</MenuItem>
              <MenuItem value="SE">SE</MenuItem>
              <MenuItem value="TE">TE</MenuItem>
              <MenuItem value="BE">BE</MenuItem>
            </MuiSelect>
          </FormControl>
        </Box>
        <Box className={classes.formSelect}>
          <Autocomplete
            {...defaultProps}
            id="controlled-demo"
            value={values.city ? values.city : ''}
            onChange={(event, city) => {
              setValues({ ...values, city })
            }}
            renderInput={(params) => <TextField {...params} label="Enter your city" margin="normal" />}
          />
        </Box>
        <Box className={classes.formControl}>
          <FormControl fullWidth>
            <FormLabel>Select Gender</FormLabel>
            <MuiRadioGroup row
              name="gender"
              value={values.gender ? values.gender : ""}
              onClick={handleChange}
            >
              <FormControlLabel key="01" value="Female" control={<Radio />} label="Female" />
              <FormControlLabel key="02" value="Male" control={<Radio />} label="Male" />
              <FormControlLabel key="03" value="Other" control={<Radio />} label="Other" />
            </MuiRadioGroup>
          </FormControl>
        </Box>
        <Box className={classes.formControl}>
          <FormControl required>
            <FormControlLabel
              control={<MuiCheckbox
                name="policy"
                color="primary"
                checked={values.check}
                onChange={handleCheck}
              />}
              label="You agree that you have read the college policy."
            />
          </FormControl>
        </Box>
        <Box className={classes.formControl}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit(e)}
            disabled={!values.check || !values.gender || !values.stuName || !values.email || !values.batch}
          >
            Register
          </Button>
        </Box>
      </Grid>
    </form>
  </div>
}

export default Form