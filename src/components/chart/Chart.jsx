import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 20231},
  { name: "February", Total: 14231},
  { name: "March", Total: 19120},
  { name: "April", Total: 18102},
  { name: "May", Total: 28901},
  { name: "June", Total: 40298.94},
];

export default function Chart() {
  return (
    <div className="flex-3">
        <div className="title">Last 6 Months (Wallet Statistic)</div>
      <ResponsiveContainer width="100%" height="80%" aspect={3 / 1}>
        <AreaChart
          className="line"
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
