import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactApexChart from "react-apexcharts";

const data = {
  series: [1023.2, 23042.12, 3821.61, 12412.01],
  options: {
    chart: {
      type: 'donut'
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
              label: 'Total',
              fontSize: '20px',
              fontWeight: 'bold',
            }
          },
          
        }
      }
    },
    legend: {
      labels: {
        // colors: darkMode ? 'white' : '#222',
        useSeriesColors: false
      },
    },
    labels: ["ETH", "BTC", "LTC", "SOL"],
    colors: ['#658ed7', '#f5c627', '#5e685c', '#daa9d2'],
  }

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
      <div className="bottom">
        <div className="featuredChart">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="donut"
            width={370}
          />
        </div>
      </div>
    </div>
  );
}