import React from "react";

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
      style={{
        backgroundColor: "var(--verde)",
      }}
    >
      <h1
        className="text-3xl font-bold mx-auto" // Center the title with mx-auto
        style={{
          color: "var(--whitish)",
        }}
      >
        Fresh Forecast
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 border-b border-var(--orange) text-var(--whitish)">
          Home
        </li>
        <li className="p-4 border-b border-var(--medium-gray) text-var(--whitish)">
          Scan Produce
        </li>
        <li className="p-4 border-b border-var(--medium-gray) text-var(--whitish)">
          Recipes
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
