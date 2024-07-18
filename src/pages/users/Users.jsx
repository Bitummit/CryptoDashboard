import DataTable from "../../components/datatable/Datatable";
import Dropdown from "../../components/dropdown/Dropdown";
import Search from "../../components/search/Search";
import SideButtons from "../../components/sideButtons/SideButtons";
import { useState } from "react";

export default function Users() {
  return (
    <div className="bg-colorBgPrimary md:px-32 users">
      <div>
        <SideButtons />
        <div className="pageContent">
          <div>
            <h1 className="pt-10 text-4xl text-colorTextGraySecond font-bold">
              All Users
            </h1>
          </div>
          <div className="mt-10 flex flex-col-reverse md:flex-row ">
            <Dropdown filters={["All users", "Active", "Inactive"]} />
            <Search />
          </div>
          <div>
            <div className="bg-colorBgSecondary rounded-lg custom-shadow my-10 p-5 min-w-52 ">
              <DataTable />
              <div className="flex justify-end text-xs">Pagination here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
