import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SwapInput(props) {
    return (
        <div className="swapInput">
            <FormControl sx={{ m: 1, minWidth: 80, height: 2 }}>
            <Select
            name={props.tokenType}
              value={props.token.name}
              onChange={props.handleChange}
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
        </div>
    )
}