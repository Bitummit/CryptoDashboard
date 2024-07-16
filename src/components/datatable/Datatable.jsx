import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import data from "./data.json";
import { Link } from "react-router-dom";

const rows = data;

export default function DataTable() {
  return (
    <div className="rounded-lg border m-2 overflow-x-scroll border-colorBorder">
      <table className="text-sm md:text-lg w-full min-w-[640px] table-auto">
        <thead className="text-base text-colorTextPrimary uppercase bg-colorBgThird ">
          <tr className="table-row">
            <th scope="col" className="text-center table-cell ">
              ID
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              Login
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="table-row bg-colorBgSecondary border-b border-colorBorder hover:bg-colorBorder">
              <td className="px-6 py-4 table-cell text-center border max-w-10">
                #{row.id}
              </td>
              <td
                scope="row"
                className="table-cell px-6 py-4 font-medium text-colorTextPrimary space-nowrap text-center "
              >
                {row.firstName} {row.lastName}
              </td>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                {row.login}
              </td>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                {row.email}
              </td>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </td>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                <div>
                  <button className="mr-4">Delete</button>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
