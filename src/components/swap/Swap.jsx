/* eslint-disable react/prop-types */
import "./swap.scss";
import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SwapInput from "./swapInput/SwapInput";
import { tokens } from "./tokens.js";

export default function Swap(props) {
  

  const initValue = props.data[Math.floor(Math.random() * props.data.length)];

  const [formData, setFormData] = useState({
    tokenFrom: initValue,
    tokenFromAmount: 0,
    tokenTo: tokens[0],
    tokenToAmount: 0,
  });

  let allTokens = tokens.filter(item => {return item.name !== formData.tokenFrom.name})

  const handleChangeToken = (event) => {
    const name = event.target.value;
    let item = {};
    if (event.target.name === "tokenFrom") {
      item = props.data.find((item) => {
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
    const names = props.data.map(item => {return item.name})

    if (names.includes(formData.tokenTo.name)) {
      let item = props.data.find((item) => {
        return item.name === formData.tokenTo.name;
      });
      return item.amount

    }
    return 0;
  }

  console.log(formData);
  return (
    <div className="swap">
      <form className="converter">
        <div className="from">
          <SwapInput
            token={formData.tokenFrom}
            handleChange={handleChangeToken}
            data={props.data}
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
        <div className="balance">
          Balance: {getTokenToBalance()}
        </div>
        <div className="info"></div>
        <button>Submit</button>
      </form>

      <div className="table">table</div>
    </div>
  );
}
