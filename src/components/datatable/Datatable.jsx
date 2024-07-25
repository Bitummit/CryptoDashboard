import "./datatable.scss";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";

export default function DataTable() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [rows, setRows] = useState([]);
  const [order, setOrder] = useState({ key: "", direction: "ASC" });

  function handlePageChange() {
    setPage(2);
    navigate({
      pathname: "",
      search: createSearchParams({
        page: 2,
      }).toString(),
    });
  }

  const { data, status } = useQuery({
    queryKey: ["/users", page],
    queryFn: async () => {
      return await Axios.get(
        `http://127.0.0.1:8000/api/users/?page=${page}`
      ).then((res) => {
        return res.data.results;
      });
    },
  });
  useEffect(() => {
    console.log("use effect");
    setRows(data);
  }, [page]);

  const sorting = (col) => {
    console.log(data);
    if (order.direction === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].localeCompare(b[col], undefined, { numeric: true })
      );

      setRows(sorted);
      setOrder({
        key: col,
        direction: "DSC",
      });
    } else {
      const sorted = [...data].sort((a, b) => b[col].localeCompare(a[col], undefined, { numeric: true }));

      setRows(sorted);
      setOrder({
        key: col,
        direction: "ASC",
      });
    }
  };

  return (
    <div className="rounded-lg border overflow-x-scroll border-colorBorder custom-shadow min-w-52">
      <table className="text-sm md:text-lg w-full min-w-[640px] table-auto">
        <thead className="text-base text-colorTextPrimary uppercase bg-colorBgThird ">
          <tr className="table-row">
            <th
              onClick={() => {
                sorting("last_name");
              }}
              scope="col"
              className="px-6 py-3 text-center table-cell cursor-pointer border-r border-colorBorder hover:bg-gray-500"
            >
              Name
              {order.key === "last_name" &&
                (order.direction === "ASC" ? (
                  <ArrowDownwardIcon className="scale-75" />
                ) : (
                  <ArrowUpwardIcon className="scale-75" />
                ))}
            </th>
            <th
              onClick={() => {
                sorting("email");
              }}
              scope="col"
              className="px-6 py-3 text-center table-cell cursor-pointer border-r border-colorBorder hover:bg-gray-500"
            >
              Email
              {order.key === "email" &&
                (order.direction === "ASC" ? (
                  <ArrowDownwardIcon className="scale-75" />
                ) : (
                  <ArrowUpwardIcon className="scale-75" />
                ))}
            </th>
            <th
              onClick={() => {
                sorting("balance");
              }}
              scope="col"
              className="px-6 py-3 text-center table-cell cursor-pointer border-r border-colorBorder hover:bg-gray-500"
            >
              Balance
              {order.key === "balance" &&
                (order.direction === "ASC" ? (
                  <ArrowDownwardIcon className="scale-75" />
                ) : (
                  <ArrowUpwardIcon className="scale-75" />
                ))}
            </th>
            <th
              onClick={() => {
                sorting("status");
              }}
              scope="col"
              className="px-6 py-3 text-center table-cell cursor-pointer border-r border-colorBorder hover:bg-gray-500"
            >
              Status
              {order.key === "status" &&
                (order.direction === "ASC" ? (
                  <ArrowDownwardIcon className="scale-75" />
                ) : (
                  <ArrowUpwardIcon className="scale-75" />
                ))}
            </th>
            <th scope="col" className="px-6 py-3 text-center table-cell"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="table-row bg-colorBgSecondary border-b border-colorBorder hover:bg-colorBorder">
              <td className="px-6 py-4 text-center text-colorTextPrimary table-cell font-bold">
                {row.first_name} {row.last_name} /{" "}
                <span className="text-colorTextGraySecond text-sm">
                  {row.username}
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
      <div
        className="flex justify-end text-xs h-12 border border-green-100"
        onClick={() => {
          handlePageChange();
        }}
      >
        Pagination here
      </div>
    </div>
  );
}
