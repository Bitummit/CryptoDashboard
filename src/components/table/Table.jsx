import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

import "./table.scss";
import data from "./data.json";

const rows = data;

export default function List() {
  return (
    <div className="rounded-lg border m-2 overflow-x-scroll border-colorBorder">
      <table className="text-sm md:text-md w-full min-w-[640px] table-auto">
        <thead className="text-xs text-colorTextPrimary uppercase bg-colorBgThird ">
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
            <tr className="table-row bg-colorBgSecondary border-b border-colorBorder hover:bg-colorBorder">
              <td className="px-6 py-4 table-cell">
                {row.isIncoming ? (
                  <div className="incoming text-green">
                    <CallReceivedIcon />
                  </div>
                ) : (
                  <div className="outcoming text-red-100">
                    <CallMadeIcon />
                  </div>
                )}
              </td>
              <th
                scope="row"
                className="table-cell px-6 py-4 font-medium text-colorTextPrimary space-nowrap text-center "
              >
                #{row.id}
                <div className="text-sm text-colorTextGraySecond ">
                  {row.date} {row.time}
                </div>
              </th>
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell">
                {row.from} - {row.to}
              </td>
              <td className="px-6 py-4 table-cell ">
                <div className="flex justify-center items-center text-colorTextPrimary font-bold" >
                  <img className="coinImage" src={row.img} /> {row.coin}
                </div>
                <div
                  className={
                    "flex justify-center items-center " +
                    (row.isIncoming ? "text-green" : "text-red-100")
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
