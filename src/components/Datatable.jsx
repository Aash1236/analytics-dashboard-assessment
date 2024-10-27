import React from "react";

function Datatable({ displayData }) {
  return (
    <section className="mt-4">
      <h2 className="mb-2 text-xl font-bold text-gray-800">EV Details</h2>
      <div className="w-full max-w-full overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-gray-200 rounded-md shadow-md">
          <thead>
            <tr className="bg-slate-300">
              <th className="p-2 text-center border border-gray-200">VIN</th>
              <th className="p-2 text-center border border-gray-200">City</th>
              <th className="p-2 text-center border border-gray-200">Make</th>
              <th className="p-2 text-center border border-gray-200">Model</th>
              <th className="p-2 text-center border border-gray-200">
                Model Year
              </th>
              <th className="p-2 text-center border border-gray-200">
                Electric Range
              </th>
              <th className="p-2 text-center border border-gray-200">
                EV Type
              </th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <td className="p-2 text-center border border-gray-200">
                  {item.vin}
                </td>
                <td className="p-2 text-center border border-gray-200">
                  {item.city}
                </td>
                <td className="p-2 text-center border border-gray-200">
                  {item.make}
                </td>
                <td className="p-2 text-center border border-gray-200">
                  {item.model}
                </td>
                <td className="p-2 text-center border border-gray-200">
                  {item.modelYear}
                </td>
                <td className="p-2 text-center border border-gray-200">
                  {item.electricRange}
                </td>
                <td className="p-2 text-center border border-gray-200">
                  {item.evType}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Datatable;
