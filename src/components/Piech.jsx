import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function Piech({ pieData, COLORS }) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-center text-gray-800">
        Top EV's Types
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            legendType="circle"
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#ed517d"
            label={({ name, value }) => `${name}: ${value}`}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value} Vehicles`, `${name}`]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 mt-4 gap-x-3">
        {pieData.map((entry, index) => (
          <div key={index} className="flex items-center">
            <div
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
              className="w-3 h-3 mr-2 rounded-full"
            ></div>
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Piech;
