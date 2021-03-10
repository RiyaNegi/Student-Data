import React, { useContext } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ActionContext } from "../ActionContext";

const useStyles = makeStyles({
    table: {
        minWidth: 450,
    },
});

function createData(name, email, batch, gender) {
    return { name, email, batch, gender };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

const DataTable = () => {
    const classes = useStyles();
    const action = useContext(ActionContext)

    return <div className="card" style={{ width: "90%" }}>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email ID</TableCell>
                        <TableCell align="right">Batch</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}

export default DataTable