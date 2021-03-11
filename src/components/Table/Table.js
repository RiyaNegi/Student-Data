import React, { useContext, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TableRow,
  Paper, Dialog
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ActionContext } from "../ActionContext";
import Form from "../Form/Form"
import { Box, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
  dialog: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  }
});

function createData(stuName, email, batch, city, gender, uid) {
  return { stuName, email, batch, city, gender, uid };
}


const DataTable = () => {
  const classes = useStyles();
  const action = useContext(ActionContext)
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rows = action.students.map(i => createData(i.stuName, i.email, i.batch, i.city, i.gender, i.uid))

  return <div className="card">
    <Box m={2} textAlign="center" fontFamily="Monospace" fontWeight="fontWeightMedium" style={{ color: "#444444" }}>
      <Typography component="h1" variant="h5">
        Registered Student Details
        </Typography>
    </Box>
    <Divider variant="middle" />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email ID</TableCell>
            <TableCell align="center">Batch</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.uid}>
              <TableCell component="th" scope="row">
                {row.stuName}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.batch}</TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" className={classes.margin} onClick={() => action.onDelete(row.uid)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" className={classes.margin} onClick={handleOpen}>
                  <EditIcon />
                </IconButton>
                <div className={classes.dialog}>
                  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <div className="modal">
                      <Form
                        stuName={row.stuName}
                        email={row.email}
                        batch={row.batch}
                        city={row.city}
                        gender={row.gender}
                        uid={row.uid}
                        edit
                        setClose={handleClose}
                      />
                    </div>
                  </Dialog>

                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}

export default DataTable