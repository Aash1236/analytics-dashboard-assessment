import React from "react";

function Home() {
  return (
    <div>
      <img
        src="https://img.freepik.com/premium-photo/white-tesla-model-s-electric-car-is-charging-tesla-charging-station_36682-248317.jpg?semt=ais_hybrid"
        alt=""
        className="absolute z-0 object-cover w-[85%] h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-[98vh] opacity-25"
      />
      <div className="p-6 bg-white bg-center bg-no-repeat bg-cover rounded-lg shadow-md ">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Welcome to the EV Analysis Dashboard
        </h1>
        <p className="text-gray-600">
          This dashboard provides insights into the electric vehicle population.
          Explore the various metrics and visualization to understand trends in
          the EV market.
        </p>
        <p className="mt-4">
          To get started, navigate to the <strong>Dashboard</strong> from the
          sidebar.
        </p>
      </div>
    </div>
  );
}

export default Home;
