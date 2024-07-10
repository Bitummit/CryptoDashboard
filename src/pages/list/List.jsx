import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/Datatable";

export default function List() {
  return (
    <div className="list">
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
}
