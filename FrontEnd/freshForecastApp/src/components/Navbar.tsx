import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
      style={{
        backgroundColor: "var(--verde)",
      }}
    >
      <h1
        className="w-full text-3xl font-bold"
        style={{
          color: "var(--whitish)",
          marginTop: nav ? "0px" : "0px",
          transition: "margin-top 0.3s ease",
          paddingLeft: "20px",
        }}
      >
        Fresh Forecast
      </h1>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} color="var(--whitish)" />
        ) : (
          <AiOutlineMenu size={20} color="var(--whitish)" />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] h-full border-r border-r-var(--medium-gray) bg-[#2A3340] ease-in-out duration-500 rounded-r-lg" // Added rounded-r-lg for rounding the right side
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1
          className="w-full text-3xl font-bold"
          style={{
            color: "var(--whitish)",
            marginTop: "20px",
            marginBottom: "20px",
            paddingLeft: "20px",
          }}
        >
          FRESH FORECAST
        </h1>
        <li
          className="p-4 border-b border-var(--orange)"
          style={{ color: "var(--whitish)", paddingLeft: "20px" }}
        >
          Home
        </li>
        <li
          className="p-4 border-b border-var(--medium-gray)"
          style={{ color: "var(--whitish)", paddingLeft: "20px" }}
        >
          Scan Produce
        </li>
        <li
          className="p-4 border-b border-var(--medium-gray)"
          style={{ color: "var(--whitish)", paddingLeft: "20px" }}
        >
          Recipes
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
