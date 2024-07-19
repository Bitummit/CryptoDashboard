import DataTable from "../../components/datatable/Datatable";
import Dropdown from "../../components/dropdown/Dropdown";
import Search from "../../components/search/Search";
import SideButtons from "../../components/sideButtons/SideButtons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Users() {
  return (
    <div className="bg-colorBgPrimary md:px-32 users">
      <div>
        <SideButtons />
        <div className="pageContent">
          <div className="flex justify-between items-center pt-10 ">
            <h1 className="text-4xl text-colorTextGraySecond font-bold">
              All Users
            </h1>
            <div>
            <Link to="/users/new" style={{ textDecoration: "none" }}>
              <button className="border border-colorBorder bg-green-100 p-2 text-lg rounded-lg text-gray-100 hover:bg-green-300">
              
                Add user
                
              </button>
            </Link>
            </div>
          </div>
          <div className="mt-10 flex flex-col-reverse md:flex-row ">
            <Dropdown filters={["All users", "Active", "Inactive"]} />
            <Search />
          </div>
          <div>
            <div className="mt-5 mx-1 md:mt-10 md:mx-0">
              <DataTable />
            </div>
            <div className="flex justify-end text-xs">Pagination here</div>
          </div>
        </div>
      </div>
    </div>
  );
}
