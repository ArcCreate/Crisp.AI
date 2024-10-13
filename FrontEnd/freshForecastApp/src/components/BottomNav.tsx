
import { AiOutlineHome, AiOutlineScan, AiOutlineFileText } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-[#F2F2F2] text-dark-gray border-t border-var(--medium-gray)">
      <div className="flex flex-col items-center" onClick={() => navigate("/")}>
        <AiOutlineHome size={24} />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center" onClick={() => navigate("/scan")}>
        <AiOutlineScan size={24} />
        <span>Scan Produce</span>
      </div>
      <div className="flex flex-col items-center" onClick={() => navigate("/my-produce")}>
        <AiOutlineFileText size={24} />
        <span>Recipes</span>
      </div>
    </div>
  );
};

export default BottomNav;
