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
    setToken(event.target.value);
  };

  return (
    <div className="swap">
      <div className="converter">
        <div className="menu">
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <Select
              defaultValue={token.name}
              value={token.name}
              onChange={handleChange}
              autoWidth
            >
              {props.data.map((item) => {
                return (
                  <MenuItem key={item.id} value={item}>
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
