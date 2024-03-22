import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";


import "./table.scss";
import data from "./data.json";

const rows = data;

export default function List() {
  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableHead">
            <TableCell className="tableCell"></TableCell>
            <TableCell className="tableCell">Transaction ID</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">From</TableCell>
            <TableCell className="tableCell">To</TableCell>
            <TableCell className="tableCell">Coin</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                {row.isIncoming ? (
                  <div className="incoming">
                    <CallReceivedIcon className="icon" />
                  </div>
                ) : (
                  <div className="outcoming">
                    <CallMadeIcon className="icon" />
                  </div>
                )}
              </TableCell>
              <TableCell className="tableCell">#{row.id}</TableCell>
              <TableCell className="tableCell">
                {row.date} {row.time}
              </TableCell>
              <TableCell className="tableCell">{row.from}</TableCell>
              <TableCell className="tableCell">{row.to}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                <img className="coinImage" src={row.img}/> {row.coin} 
                </div>
              </TableCell>
              <TableCell className="tableCell">
                {row.isIncoming ? "+" : "-"} ${row.amount}
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
