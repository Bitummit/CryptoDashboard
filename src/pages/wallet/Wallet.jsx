import "./wallet.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataGridTable from "../../components/datagridtable/DataGridTable";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { data as walletData } from "./data.js";
import Swap from "../../components/swap/Swap.jsx";

export default function Wallet() {
  const walletColumns = [
    {
      field: "name",
      headerName: "Token",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="name">
            <img className="nameIcon" src={params.row.image} />{" "}
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="amount">
            {params.row.amount}
            <img className="icon" src={params.row.image} />
          </div>
        );
      },
    },
    {
      field: "portfolio",
      headerName: "Portfolio %",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => {
        return <div className="portfolio">{params.row.portfolio}%</div>;
      },
    },
    {
      field: "price",
      headerName: "Price(24h)",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => {
        return <div className="price">${params.row.price}</div>;
      },
    },
    {
      field: "balance",
      headerName: "Balance",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => {
        return <div className="balance">${params.row.balance}</div>;
      },
      // valueGetter: (value) => "$" + value,  with $ sort is incorrect
    },
  ];

  const [total, setTotal] = useState(0);
  const [alignment, setAlignment] = useState("wallet");

  const handleChange = (newAlignment) => {
    setAlignment(newAlignment.target.value);
  };

  useEffect(() => {
    setTotal(0);
    walletData.forEach((item) => {
      setTotal((prev) => prev + item.balance);
    });
    walletData.map((coin) => {
      coin.portfolio = parseFloat((coin.balance / total) * 100).toFixed(2);
    });
  }, [total]);

  let component;
  if (alignment === "wallet") {
    component = (
      <div className="walletTable">
        <DataGridTable data={walletData} columns={walletColumns} />
      </div>
    );
  } else {
    component = <Swap walletData={walletData} />;
  }

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
          {component}
        </div>
      </div>
    </div>
  );
}
