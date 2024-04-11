import "./datagridtable.scss";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridTable(props) {
    return(
      <DataGrid
        className="data"
        rows={props.data}
        columns={props.columns}
        disableColumnFilter
        disableColumnMenu
        disableColumnResize
        disableRowSelectionOnClick
        hideFooter
        rowHeight={70}
      />
    )
}