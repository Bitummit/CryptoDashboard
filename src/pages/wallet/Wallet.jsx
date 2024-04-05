import "./wallet.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import WalletTable from "../../components/walletTable/WalletTable";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { data } from "./data.js";

export default function Wallet() {
  const [total, setTotal] = useState(0);
  const [alignment, setAlignment] = useState("wallet");

  const handleChange = (newAlignment) => {
    setAlignment(newAlignment.target.value);
  };
  console.log(alignment);

  useEffect(() => {
    setTotal(0);
    data.forEach((item) => {
      setTotal((prev) => prev + item.balance);
    });
    data.map((coin) => {
      coin.portfolio = parseFloat((coin.balance / total) * 100).toFixed(2);
    });
  }, [total]);

  return (
    <div className="wallet">
      <Sidebar />
      <div className="walletContainer">
        <Navbar />
        <div className="content">
          <div className="totalStatistic">
            <h3>Portfolio value</h3>
            <h1>$ {total.toLocaleString()}</h1>
            <p className="up">+$1201.47 (+3.8%)</p>
          </div>
          <div className="buttonGroup">
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              onChange={handleChange}
            >
              <ToggleButton value="wallet">Wallet</ToggleButton>
              <ToggleButton value="swap">Swap</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <WalletTable data={data} />
        </div>
      </div>
    </div>
  );
}
