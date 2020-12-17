import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import FlashOnIcon from '@material-ui/icons/FlashOn';

const StyledTableCell = withStyles((theme) => ({
    root:{
        borderBottom: "none",
    },
    head: {
        backgroundColor: "#f4511e",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    }

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "rgb(18 21 33)",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "rgb(28 32 43)",
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Zakhar', 69, 69, 69, 69/69*100),
    createData('Tobi', 54, 45, 45, 45/54*100),
    createData('Alex', 42, 23, 23, 23/42*100),
    createData('Paulius', 33, 11, 11, 11/33*100),
    createData('Stan', 12, 2, 2, 2/12*100),
    createData('Kristof', 11, 2, 2, 2/11*100),
    createData('Stefan', 5, 2, 2, 2/5*100),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    tableContainer: {
        overflowX: "visible",
    },
    container:{
        marginTop: "40px",
    },

});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container}>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <StyledTableCell>Player</StyledTableCell>
                            <StyledTableCell align="right">Bets</StyledTableCell>
                            <StyledTableCell align="right">Wins</StyledTableCell>
                            <StyledTableCell align="right">Points</StyledTableCell>
                            <StyledTableCell align="right">WinPer %</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {
                                        //<FlashOnIcon></FlashOnIcon>
                                    }
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}%</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}