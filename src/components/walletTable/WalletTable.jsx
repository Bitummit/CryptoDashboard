/* eslint-disable react/prop-types */
import "./walletTable.scss";
import { DataGrid } from "@mui/x-data-grid";


export default function WalletTable(props) {
  
  const columns = [
    {
      field: "name",
      headerName: "Token",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="name">
            <img className="nameIcon" src={params.row.image} />{" "}
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="amount">
            {params.row.amount}
            <img className="icon" src={params.row.image} />
          </div>
        );
      },
    },
    {
      field: "portfolio",
      headerName: "Portfolio %",
      flex: 1,
      headerAlign: "center",
      cellClassName: "portfolio",
      valueGetter: (value) => value + "%",
    },
    {
      field: "price",
      headerName: "Price(24h)",
      flex: 1,
      headerAlign: "center",
      cellClassName: "price",
      valueGetter: (value) => "$" + value,
    },
    {
      field: "balance",
      headerName: "Balance",
      flex: 1,
      headerAlign: "center",
      cellClassName: "balance",
      valueGetter: (value) => "$" + value,
    },
  ];

  return (
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
  );
}
