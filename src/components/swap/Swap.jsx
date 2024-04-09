import "./swap.scss";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Swap(props) {
  const initValue = props.data[Math.floor(Math.random() * props.data.length)];
  const [token, setToken] = useState(initValue);

  const handleChange = (event) => {
    const name = event.target.value;
    const item = props.data.find((item) => {
      return item.name === name;
    });
    setToken(item);
  };

  return (
    <div className="swap">
      <div className="converter">
        <div className="menu">
          <FormControl sx={{ m: 1, minWidth: 80, height: 2 }}>
            <Select
              value={token.name}
              onChange={handleChange}
              autoWidth
              variant={"standard"}
            >
              {props.data.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <input placeholder={token.amount} />
      </div>
      <div className="table">table</div>
    </div>
  );
}
