import ReactApexChart from "react-apexcharts";

export default function Featured() {
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
    <div className="flex-1 min-w-64">
    <div className="max-w-sm bg-white rounded-lg custom-shadow dark:bg-gray-800 p-4 md:p-6">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
          Wallet Statistic
        </h5>
      <div className="grid grid-cols-1 mt-10 items-center border-gray-200 border-t dark:border-gray-700 justify-between"></div>

      <div className="py-6" id="donut-chart">
        <ReactApexChart
          options={chartData.options}
          type="donut"
          series={chartData.series}
          width={"100%"}
          height={350}
        />
      </div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"></div>
    </div>
    </div>
  );
}
