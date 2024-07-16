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
            <th scope="col" className="px-6 py-3 text-center table-cell">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              Balance
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
                <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                  {row.firstName} {row.lastName} / <span className="text-colorTextGraySecond text-sm">{row.login}</span>
              </td>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                {row.email}
              </td>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                {row.balance}
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
