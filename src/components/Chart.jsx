import React from "react";
import {
  Legend,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from "recharts";

function Chart({ displayData }) {
  return (
    <div className="flex flex-col bg-gray-200 p-6 rounded-lg shadow-lg max-h-[450px] ">
      <h2 className="mb-4 text-xl font-bold text-center text-gray-800">
        EV's Per Year
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={displayData}
          margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
        >
          <XAxis dataKey="Year" tick={{ fill: "#363434", fontSize: 12 }} />
          <YAxis tick={{ fill: "#363434", fontSize: 12 }} />
          <Tooltip content={"year"} />
          <Legend type="circle" />
          <Bar dataKey="count" fill="#FF0000" radius={[16, 16, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
