import "./widget.scss";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export default function Widget(props) {
  return (
    <div className="widget">
      <img src={props.image} alt="" />
      <div className="text">
        <div className="header">
          {props.name} ${props.price}
        </div>
        <div className="time">
          <span className={props.isUp ? "up" : "down"}>
            {props.isUp ? <TrendingUpIcon /> : <TrendingDownIcon />}
            {props.percent}%
          </span>
          last week
        </div>
      </div>
    </div>
  );
}
