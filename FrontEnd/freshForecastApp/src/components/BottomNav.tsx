import React from "react";
import { AiOutlineHome, AiOutlineScan, AiOutlineFileText } from "react-icons/ai";

const BottomNav = () => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-[#F2F2F2] text-dark-gray border-t border-var(--medium-gray)"
    >
      <div className="flex flex-col items-center">
        <AiOutlineHome size={24} />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center">
        <AiOutlineScan size={24} />
        <span>Scan Produce</span>
      </div>
      <div className="flex flex-col items-center">
        <AiOutlineFileText size={24} />
        <span>Recipes</span>
      </div>
    </div>
  );
};

export default BottomNav;
