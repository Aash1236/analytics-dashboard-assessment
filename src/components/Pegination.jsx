import React from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

function Pegination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <section className="flex items-center justify-between mt-6">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
        disabled={currentPage === 0}
        className={`flex items-center px-4 py-2 rounded-full bg-blue-600 text-white transition-all duration-300 ease-in-out ${
          currentPage === 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-blue-700"
        }`}
      >
        <IoArrowBackCircle />
      </button>
      <span className="flex items-center justify-center w-full text-lg font-semibold text-center">
        <span className="text-gray-700">Page</span>
        <span className="mx-2 text-red-600">{currentPage + 1}</span>
        <span className="text-gray-700">of</span>
        <span className="mx-2 text-red-600">{totalPages}</span>
      </span>
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.max(prev + 1, totalPages - 1))
        }
        disabled={currentPage >= totalPages - 1} // Corrected
        className={`flex items-center px-4 py-2 rounded-full bg-blue-600 text-white transition-all duration-300 ease-in-out ${
          currentPage >= totalPages - 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-blue-700"
        }`}
      >
        <IoArrowForwardCircle />
      </button>
    </section>
  );
}

export default Pegination;
