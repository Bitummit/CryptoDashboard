import "./list.scss";
import DataTable from "../../components/datatable/Datatable";
import SideButtons from "../../components/sideButtons/SideButtons";


export default function Users() {
  return (
    <div className="bg-colorBgPrimary md:px-20">
       <div>
        <SideButtons />
        <div className="pageContent">
          <div>
            <h1 className="pt-10 pl-10 text-4xl text-colorTextGraySecond font-bold">
             All Users
            </h1>
          </div>
          <div >
            <div className="bg-colorBgSecondary rounded-lg custom-shadow mt-10 p-5 min-w-52 ">
              <DataTable />
              <div className="flex justify-end text-xs">Pagination here</div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
