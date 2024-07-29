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
import PaginationShort from "../pagination/PaginationShort";
import Pagination from "../pagination/Pagination";


export default function DataTable() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [rows, setRows] = useState([]);
  const [order, setOrder] = useState({ key: "", direction: "ASC" });

  const pagesPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);

  function handlePageChange(newValue) {
    setPage(newValue);
    navigate({
      pathname: "",
      search: createSearchParams({
        page: newValue,
      }).toString(),
    });
  }

  const { data, status, error } = useQuery({
    queryKey: ["/users", page],
    queryFn: async () => {
      return await Axios.get(
        `http://127.0.0.1:8000/api/users/?page=${page}`
      ).then((res) => {
        return res.data;
      })
      .catch((error) => {
        return "Error";
    });;
    },
    throwOnError: (error) => error.response?.status >= 500,
  });

  if (data === "Error") {
    return <div>Error!</div>
  }

  useEffect(() => {
    console.log("use effect");
    
    setRows(data.results);
    setTotalPages(Math.ceil(data.count / pagesPerPage));
  }, [page]);


  const sorting = (col) => {
    if (order.direction === "ASC") {
      const sorted = [...data.results].sort((a, b) =>
        a[col].localeCompare(b[col], undefined, { numeric: true })
      );

      setRows(sorted);
      setOrder({
        key: col,
        direction: "DSC",
      });
    } else {
      const sorted = [...data.results].sort((a, b) =>
        b[col].localeCompare(a[col], undefined, { numeric: true })
      );

      setRows(sorted);
      setOrder({
        key: col,
        direction: "ASC",
      });
    }
  };

  return (
    <div>
    <div className="rounded-lg border overflow-x-scroll border-colorBorder custom-shadow min-w-52 mb-5">
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
      <div className="hidden md:flex w-full justify-end">
        <PaginationShort
          handlePageChange={handlePageChange}
          page={page}
          total={totalPages}
        />
      </div>
    </div>
    <div className="flex justify-center w-full md:hidden mb-3">
        <PaginationShort
          handlePageChange={handlePageChange}
          page={page}
          total={totalPages}
        />
      </div>
      <Pagination page={page}
          total={totalPages}/>
    </div>
    
  );
}
