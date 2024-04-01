import "./wallet.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import WalletTable from "../../components/walletTable/WalletTable";

export default function Wallet() {

    const data = [
        {
            id: 1,
            name: 'ETH',
            image: "/src/assets/eth.png",
            amount: 1.2301,
            price: 3558.56,
            balance: 4336.14,
        },
        {
            id: 2,
            name: 'BTC',
            image: "/src/assets/btc.png",
            amount: 0.12821,
            price: 72000,
            balance: 9231.56,
        },
        {
            id: 3,
            name: 'LTC',
            image: "/src/assets/ltc.png",
            amount: 154.65756,
            price: 83.91,
            balance: 12977.07,
        },
        {
            id: 4,
            name: 'SOL',
            image: "/src/assets/sol.png",
            amount: 21.435612,
            price: 210.80,
            balance: 4518.80,
        },
    ]
    // fetch to get wallet static 
    return (
        <div className="wallet">
            <Sidebar />
            <div className="walletContainer">
            <Navbar />
            <div className="content">
                <WalletTable data={data}/>
            </div>
            </div>
        </div>
    )
}