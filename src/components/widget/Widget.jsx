
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export default function Widget(props) {
  return (
    <div className="flex-1 mt-10 hover:-translate-y-5 transition duration-500 min-w-52">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg custom-shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
          <img
            className="w-24 h-24 rounded-full shadow-dark relative -top-14"
            src={props.image}
            alt=""
          />
        </div>
        <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name} ${props.price}
        </h5>
        <div className="flex justify-center mb-2 font-normal text-gray-700 dark:text-gray-400">
          <span className={props.isUp ? "text-green" : "text-red"}>
            {props.isUp ? <TrendingUpIcon /> : <TrendingDownIcon />}
            {props.percent}%
          </span>
          <p className="ml-2">last week</p>
        </div>
      </div>
    </div>
  );
}
