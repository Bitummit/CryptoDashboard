import ReactApexChart from "react-apexcharts";

const data = [
  { name: "January", total: 20231 },
  { name: "February", total: 14231 },
  { name: "March", total: 19120 },
  { name: "April", total: 18102 },
  { name: "May", total: 28901 },
  { name: "June", total: 40298.94 },
];

const chartData = {
  series: [
    {
      name: "Portfolio value",
      data: data.map((data) => {
        return data.total;
      }),
      color: "#1A56DB",
    },
  ],
  options: {
    xaxis: {
      show: true,
      categories: data.map((data) => {
        return data.name;
      }),
      labels: {
        show: true,
        style: {
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          cssClass: "text-xs fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return "$" + value;
        },
      },
    },

    chart: {
      sparkline: {
        enabled: false,
      },
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  },
};

export default function Chart() {
  return (
    <div className="flex-3 bg-white rounded-lg custom-shadow dark:bg-gray-800 p-4 min-w-52 min-h-80 w-full">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
        Last 6 Months (Wallet Statistic)
      </h5>
      <div className="h-4/5 mt-6">
        <ReactApexChart
          options={chartData.options}
          type="area"
          series={chartData.series}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
}
