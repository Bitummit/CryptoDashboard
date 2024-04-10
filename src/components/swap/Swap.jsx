import "./swap.scss";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Swap(props) {
  const initValue = props.data[Math.floor(Math.random() * props.data.length)];
  const [tokenFrom, setTokenFrom] = useState(initValue);

  const handleChange = (event) => {
    const name = event.target.value;
    const item = props.data.find((item) => {
      return item.name === name;
    });
    setTokenFrom(item);
  };

  return (
    <div className="swap">
      <div className="converter">
        <div className="from">
          <FormControl sx={{ m: 1, minWidth: 80, height: 2 }}>
            <Select
              value={tokenFrom.name}
              onChange={handleChange}
              autoWidth
              variant={"standard"}
            >
              {props.data.map((item) => {
                return (
                  <MenuItem
                    key={item.id}
                    value={item.name}
                    className="dropItem"
                  >
                    <img src={item.image} />
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <input placeholder={tokenFrom.amount} />
        </div>
        <div className="arrow">
          <KeyboardDoubleArrowDownIcon className="icon" />
        </div>
        <div className="to"></div>
      </div>

      <div className="table">table</div>
    </div>
  );
}
