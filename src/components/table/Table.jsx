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
    <div class="relative overflow-x-auto rounded-lg border m-3">
      <table class="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 text-center"></th>
            <th scope="col" class="px-6 py-3 text-center">
              ID
            </th>
            <th scope="col" class="px-6 py-3 text-center">
              FROM-TO
            </th>
            <th scope="col" class="px-6 py-3 text-center">
              Amount
            </th>
            <th scope="col" class="px-6 py-3 text-center">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4 ">
                {row.isIncoming ? (
                  <div className="incoming text-green">
                    <CallReceivedIcon />
                  </div>
                ) : (
                  <div className="outcoming text-red">
                    <CallMadeIcon />
                  </div>
                )}
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center "
              >
                #{row.id}
                <div className="text-sm text-gray-700 dark:text-gray-400">
                  {row.date} {row.time}
                </div>
              </th>
              <td className="px-6 py-4 text-center text-gray-950">
                {row.from} - {row.to}
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center items-center text-gray-950 font-bold">
                  <img className="coinImage" src={row.img} /> {row.coin}
                </div>
                <div
                  className={
                    "flex justify-center items-center " +
                    (row.isIncoming ? "text-green" : "text-red")
                  }
                >
                  {row.isIncoming ? "+" : "-"} ${row.amount}
                </div>
              </td>
              <td className="px-6 py-4 flex justify-center items-center">
                <span className={`status ${row.status}`}>{row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
