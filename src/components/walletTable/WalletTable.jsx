/* eslint-disable react/prop-types */
import "./walletTable.scss";
import { DataGrid } from "@mui/x-data-grid";


export default function WalletTable(props) {
  let total = 0;
  props.data.forEach((item) => {
    total += item.balance;
  });
  props.data.map((coin) => {
    coin.portfolio = parseFloat((coin.balance / total) * 100).toFixed(2);
  });
  const columns =[
    { field: "name", headerName: "Token", flex: 1,headerAlign: 'center', cellClassName: 'name',},
    { 
      field: "amount",
      headerName: "Amount", 
      flex: 1, 
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <div className="amount">
            {params.row.amount}<img className="icon" src={params.row.image} /> 
          </div>
        );
      },
    },
    { field: "portfolio", headerName: "Portfolio %", flex: 1, headerAlign: 'center', cellClassName: 'portfolio',},
    { field: "price", headerName: "Price(24h)", flex: 1, headerAlign: 'center', cellClassName: 'price', },
    { field: "balance", headerName: "Balance", flex: 1, headerAlign: 'center', cellClassName: 'balance', }
  ]

  return (
    <div className="walletTable">
      <div className="totalStatistic">
        <h3>Portfolio value</h3>
        <h1>$ {total.toLocaleString()}</h1>
        <p className="up">+$1201.47 (+3.8%)</p>
      </div>
      <div className="datatable">
        <DataGrid
          className="data"
          rows={props.data}
          columns={columns}
          disableColumnFilter
          disableColumnMenu
          disableColumnResize
          disableRowSelectionOnClick
          hideFooter
          rowHeight={70}
        />
      </div>
      
    </div>
  );
}
