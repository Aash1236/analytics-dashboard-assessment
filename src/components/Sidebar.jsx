import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden w-64 min-h-screen p-5 text-white bg-gray-800 md:block">
      <h2 className="mb-4 text-lg font-bold">Menu</h2>
      <ul>
        <li>
          <Link to={"/"} className="p-4 mb-4 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/dashboard"} className="p-4 hover:underline">
            Dashboard
          </Link>
        </li>
      </ul>
      <img src="../assets/Cherger.jpg" alt="" className="mt-4 rounded-lg" />
    </aside>
  );
}

export default Sidebar;
