import ReactApexChart from "react-apexcharts";
import fetchData from "../../api/fetchData";
import { useEffect } from "react";
import { getData } from "../../fetch/getData";

// const resourse = fetchData(`https://api.tvmaze.com/shows/27436/episodes`);
const resourse = getData(`https://api.tvmaze.com/shows/27436/episodes`, 5000);

export default function Featured() {
  
  const testFetch = resourse.read();

  const data = [
    {
      label: "ETH",
      value: 1023.2,
    },
    {
      label: "BTC",
      value: 23042.12,
    },
    {
      label: "LTC",
      value: 3821.61,
    },
    {
      label: "SOL",
      value: 12412.01,
    },
  ];

  const chartData = {
    series: data.map((data) => {
      return data.value;
    }),
    options: {
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      stroke: {
        colors: ["transparent"],
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,

                fontWeight: "bold",
                label: "Total",
                formatter: function () {
                  const sum = chartData.series.reduce((a, b) => {
                    return a + b;
                  }, 0);
                  return "$" + sum;
                },
              },
              value: {
                show: true,
                fontWeight: "bold",
                offsetY: -20,
                formatter: function (value) {
                  return "$" + value;
                },
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: {
          top: -5,
        },
      },
      labels: data.map((data) => {
        return data.label;
      }),

      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        offsetY: 5,
        fontSize: 16,
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return "$ " + value;
          },
        },
      },
    },
  };

  

  return (
    <div className="flex-1 min-w-52">
      <div className="max-w-sm bg-colorBgSecondary rounded-lg custom-shadow p-4 md:p-6">
        <h5 className="text-xl font-bold leading-none text-colorTextGraySecond pe-1">
          Wallet Statistic
        </h5>
        <div className="grid grid-cols-1 mt-10 items-center border-t justify-between"></div>

        <div className="py-6 " id="donut-chart">
          <ReactApexChart
            options={chartData.options}
            type="donut"
            series={chartData.series}
            width={"100%"}
            height={350}
          />
        </div>

        <div className="grid grid-cols-1 items-center border-t justify-between"></div>
      </div>
    </div>
  );
}
