import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactApexChart from "react-apexcharts";
import { useContext } from "react";
import { ThemeModeContext } from "../../context/themeModeContext";

const data = {
  series: [1023.2, 23042.12, 3821.61, 12412.01],
  options: {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
              label: "Total",
              fontSize: "20px",
              fontWeight: "bold",
            },
          },
        },
      },
    },
    legend: {
      fontSize: "16px",
      position: "bottom",
      labels: {
        // colors: 'white',
        // colors: theme.darkMode ? 'white' : '#222',
        useSeriesColors: false,
      },
    },
    labels: ["ETH", "BTC", "LTC", "SOL"],
    colors: ["#658ed7", "#f5c627", "#5e685c", "#daa9d2"],
  },
};

// let total = 0;

// data.series.forEach((num) => {
//   total += num;
// });

export default function Featured() {
  const theme = useContext(ThemeModeContext);
  data.options.legend.labels.colors = theme.darkMode ? "#ece8ff" : "#222";

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Wallet Statistic</h1>
        <MoreVertIcon className="icon" fontSize="medium" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="donut"
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
