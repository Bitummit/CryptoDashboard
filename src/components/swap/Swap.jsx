/* eslint-disable react/prop-types */
import "./swap.scss";
import { useState } from "react";
import DataGridTable from "../../components/datagridtable/DataGridTable";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SwapInput from "./swapInput/SwapInput";
import { tokens } from "./tokens.js";
import data  from "../table/data.json";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

export default function Swap(props) {
  const initValue =
    props.walletData[Math.floor(Math.random() * props.walletData.length)];

  const [formData, setFormData] = useState({
    tokenFrom: initValue,
    tokenFromAmount: 0,
    tokenTo: tokens[0],
    tokenToAmount: 0,
  });

  let allTokens = tokens.filter((item) => {
    return item.name !== formData.tokenFrom.name;
  });

  const handleChangeToken = (event) => {
    const name = event.target.value;
    let item = {};
    if (event.target.name === "tokenFrom") {
      item = props.walletData.find((item) => {
        return item.name === name;
      });
    } else {
      item = tokens.find((item) => {
        return item.name === name;
      });
    }
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: item,
      };
    });
  };

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  function getTokenToBalance() {
    const names = props.walletData.map((item) => {
      return item.name;
    });

    if (names.includes(formData.tokenTo.name)) {
      let item = props.walletData.find((item) => {
        return item.name === formData.tokenTo.name;
      });
      return item.amount;
    }
    return 0;
  }

  const transactionColumns = [
    {
      field: "isIncoming",
      headerName: "",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="isIncoming">
            {params.isIncoming ? (
              <div className="incoming">
                <CallReceivedIcon className="icon" />
              </div>
            ) : (
              <div className="outcoming">
                <CallMadeIcon className="icon" />
              </div>
            )}
          </div>
        );
      },
    },
    {
      field: "id",
      headerName: "Transaction ID",
      flex: 2,
      headerAlign: "center",
      cellClassName: "id"
    },
    {
      field: "date",
      headerName: "Date",
      flex: 2,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="date">
            {params.row.date} {params.row.time}
          </div>
        );
      },
    },
    {
      field: "from",
      headerName: "From",
      flex: 2,
      headerAlign: "center",
      cellClassName: "from",
    },
    {
      field: "to",
      headerName: "To",
      flex: 2,
      headerAlign: "center",
      cellClassName: "to",
    },
    {
      field: "coin",
      headerName: "Token",
      flex: 2,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="token">
            <img className="coinImage" src={params.row.img} /> {params.row.coin}{" "}
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 2,
      headerAlign: "center",
      cellClassName: "amount",
      renderCell: (params) => {
        return (
          <div className="amount">
            {params.row.isIncoming ? "+" : "-"} ${params.row.amount}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: 2,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <span className={`status ${params.row.status}`}>
            {params.row.status}
          </span>
        );
      },
    },
  ];

  console.log(formData);
  return (
    <div className="swap">
      <form className="converter">
        <div className="from">
          <SwapInput
            token={formData.tokenFrom}
            handleChange={handleChangeToken}
            data={props.walletData}
            tokenType={"tokenFrom"}
          />
          <input
            name="tokenFromAmount"
            placeholder={formData.tokenFrom.amount}
            onChange={handleChange}
          />
        </div>
        <div className="balance">Balance: {formData.tokenFrom.amount}</div>
        <div className="arrow">
          <KeyboardDoubleArrowDownIcon className="icon" />{" "}
        </div>
        <div className="to">
          <SwapInput
            token={formData.tokenTo}
            handleChange={handleChangeToken}
            data={allTokens}
            tokenType={"tokenTo"}
          />
          <input
            placeholder={0.0}
            name="tokenToAmount"
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="balance">Balance: {getTokenToBalance()}</div>
        <div className="info"></div>
        <button>Submit</button>
      </form>
      <div className="pass">
        {/* <DataGridTable data={data} columns={transactionColumns} /> */}
      </div>
    </div>
  );
}
