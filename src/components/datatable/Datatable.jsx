import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import data from "./data.json";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const rows = data;

export default function DataTable() {
  return (
    <div className="rounded-lg border overflow-x-scroll border-colorBorder custom-shadow min-w-52">
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
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell font-bold">
                {row.firstName} {row.lastName} /{" "}
                <span className="text-colorTextGraySecond text-sm">
                  {row.login}
                </span>
              </td>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                {row.email}
              </td>
              <td className="px-6 py-4 text-center font-bold text-colorTextPrimary table-cell">
                ${row.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                <div className="flex items-center justify-center">
                  <div
                    className={`rounded-lg w-3 h-3 mr-1 ${row.status.toLowerCase()}`}
                  ></div>
                  <span>{row.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                <div className="flex flex-col items-center justify-center md:flex-row">
                  <button className="md:mr-4 text-blue-100 hover:bg-blue-200 bg-blue-10 rounded-lg p-1">
                    <EditIcon />
                  </button>
                  <button className="mt-2 md:mt-0 text-red-100 hover:bg-red-200 bg-red-50 rounded-lg p-1">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
