import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

import "./table.scss";
import data from "./data.json";

const rows = data;

export default function List() {
  return (
    <div className="rounded-lg border m-2 overflow-x-scroll ">
      <table className="text-sm md:text-md text-gray-500 dark:text-gray-400 w-full min-w-[640px] table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="table-row">
            <th scope="col" className="px-6 py-3 text-center table-cell"></th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              ID
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              FROM-TO
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="table-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 table-cell">
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
                className="table-cell px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center "
              >
                #{row.id}
                <div className="text-sm text-gray-700 dark:text-gray-400 ">
                  {row.date} {row.time}
                </div>
              </th>
              <td className="px-6 py-4 text-center text-gray-950 table-cell dark:text-gray-200">
                {row.from} - {row.to}
              </td>
              <td className="px-6 py-4 table-cell ">
                <div className="flex justify-center items-center text-gray-950 font-bold dark:text-gray-300" >
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
              <td className="px-6 py-4 flex justify-center items-center ">
                <span className={`status ${row.status}`}>{row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
