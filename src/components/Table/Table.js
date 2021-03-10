import React, { useContext, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ActionContext } from "../ActionContext";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Form from "../Form/Form"

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

function createData(stuName, email, batch, gender, uid) {
  return { stuName, email, batch, gender, uid };
}


const DataTable = () => {
  const classes = useStyles();
  const action = useContext(ActionContext)
  const [close, setClose] = useState(false)

  const rows = action.students.map(i => createData(i.stuName, i.email, i.batch, i.gender, i.uid))

  console.log("rows->", rows)
  return <div className="card" style={{ width: "90%" }}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email ID</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Batch</TableCell>
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
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" className={classes.margin} onClick={() => action.onDelete(row.uid)}>
                  <DeleteIcon />
                </IconButton>
                <Popup trigger={<IconButton aria-label="delete" className={classes.margin}>
                  <EditIcon />
                </IconButton>} position="right center" modal>
                  {close => (
                    <Form stuName={row.stuName} email={row.email} batch={row.batch} gender={row.gender} uid={row.uid} edit setClose={close} />
                  )}
                </Popup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}

export default DataTable