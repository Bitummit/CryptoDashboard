import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./table.scss";
import data from "./data.json";

const rows = data;

export default function List() {
  return (
      <TableContainer className="table" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell classNmae="tableCell">test</TableCell>
              <TableCell classNmae="tableCell">Transaction ID</TableCell>
              <TableCell classNmae="tableCell">Date</TableCell>
              <TableCell classNmae="tableCell">From</TableCell>
              <TableCell classNmae="tableCell">To</TableCell>
              <TableCell classNmae="tableCell">Coin</TableCell>
              <TableCell classNmae="tableCell">Amount</TableCell>
              <TableCell classNmae="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell classNmae="tableCell">picture here</TableCell>
                <TableCell classNmae="tableCell">{row.id}</TableCell>
                <TableCell classNmae="tableCell">
                  {row.date} {row.time}
                </TableCell>
                <TableCell classNmae="tableCell">{row.from}</TableCell>
                <TableCell classNmae="tableCell">{row.to}</TableCell>
                <TableCell classNmae="tableCell">{row.coint}</TableCell>
                <TableCell classNmae="tableCell">{row.amount}</TableCell>
                <TableCell classNmae="tableCell">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
