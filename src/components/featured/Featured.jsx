import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactApexChart from "react-apexcharts";

const data = {
  series: [1023.2, 23042.12, 3821.61, 12412.01],
  options: {
    chart: {
      type: "pie",
    },
    labels: ["ETH", "BTC", "LTC", "SOL"],
    responsive: [
      {
        breakpoint: 100,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "right",
          },
        },
      },
    ],
  },
};

let total = 0;

data.series.forEach((num) => {
  total += num;
});

export default function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Wallet Statistic</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="total">Total: ${total}</div>
      <div className="bottom">
        <div className="featuredChart">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="pie"
            width={380}
          />
        </div>
      </div>
    </div>
  );
}
