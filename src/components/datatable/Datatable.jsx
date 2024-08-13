import "./datatable.scss";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect, useLayoutEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import SortingTableHeader from "./SortingTableHeader";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import Pagination from "../pagination/Pagination";
import sorting from "../../services/sorting";
import query_get from "../../api/queries";

export default function DataTable() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [sortingField, setSortingField] = useState("-pk");
  const [totalPages, setTotalPages] = useState(1);

  const [rows, setRows] = useState([]);
  const [order, setOrder] = useState({ key: "", direction: "ASC" });

  const { data, status, error } = query_get(
    `users/?page=${page}&ordering=${sortingField}`,
    ["/users", page, sortingField]
  );

  if (data === "Error") return <div>Error!</div>;

  useLayoutEffect(() => {
    console.log("datatable use effect");
    setRows(data.results);
  }, [page, sortingField]);

  useEffect(() => {
    const pagesPerPage = data.results.length;
    setTotalPages(Math.ceil(data.count / pagesPerPage));
  }, []);

  function handlePageChange(newValue) {
    setPage(newValue);
    navigate({
      pathname: "",
      search: createSearchParams({
        page: newValue,
      }).toString(),
    });
  }

  function handleHeaderClick(field_name) {
    // setRows(sorting(field_name, order, data, setOrder));
    
    console.log(field_name);
    if (order.direction === "ASC") {
      setOrder({ key: field_name, direction: "DSC" });
      field_name === "balance" ? field_name = setSortingField("-wallet__balance") : setSortingField("-" + field_name)
      ;

    } else {
      setOrder({ key: field_name, direction: "ASC" });
      field_name === "balance" ? field_name = setSortingField("wallet__balance") : setSortingField(field_name)

    }
  }

  return (
    <div>
      <div className="rounded-lg border overflow-x-scroll border-colorBorder custom-shadow min-w-52 mb-5">
        <table className="text-sm md:text-lg w-full min-w-[640px] table-auto">
          <thead className="text-base text-colorTextPrimary uppercase bg-colorBgThird ">
            <tr className="table-row">
              <SortingTableHeader
                field_key="last_name"
                field_name="Name"
                order={order}
                handleHeaderClick={handleHeaderClick}
              />
              <SortingTableHeader
                field_key="email"
                field_name="Email"
                order={order}
                handleHeaderClick={handleHeaderClick}
              />
              <SortingTableHeader
                field_key="balance"
                field_name="Balance"
                order={order}
                handleHeaderClick={handleHeaderClick}
              />
              <SortingTableHeader
                field_key="status"
                field_name="Status"
                order={order}
                handleHeaderClick={handleHeaderClick}
              />
              <TableHeader />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr className="table-row bg-colorBgSecondary border-b border-colorBorder hover:bg-colorBorder">
                <TableCell bold={true}>
                  {row.first_name} {row.last_name} /{" "}
                  <span className="text-colorTextGraySecond text-sm">
                    {row.username}
                  </span>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell bold={true}>
                  $
                  {row.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center">
                    <div
                      className={`rounded-lg w-3 h-3 mr-1 ${row.status.toLowerCase()}`}
                    ></div>
                    <span>{row.status}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col items-center justify-center md:flex-row">
                    <button className="md:mr-4 text-blue-100 hover:bg-blue-200 bg-blue-10 rounded-lg p-1">
                      <EditIcon />
                    </button>
                    <button className="mt-2 md:mt-0 text-red-100 hover:bg-red-200 bg-red-50 rounded-lg p-1">
                      <DeleteIcon />
                    </button>
                  </div>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="m-3 mr-8">
          <Pagination
            page={page}
            total={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
