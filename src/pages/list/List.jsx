import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"


export default function List() {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                datatable
            </div>
        </div>
    )
}