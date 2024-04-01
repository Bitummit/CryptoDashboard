import "./wallet.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

export default function Wallet() {
    return (
        <div className="wallet">
            <Sidebar />
            <div className="walletContainer">
            <Navbar />
            <div className="content">
                Wallet
            </div>
            </div>
        </div>
    )
}