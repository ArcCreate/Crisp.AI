import { ReactTyped } from "react-typed"; // Ensure correct import
import FreshProduceImage from "../assets/image.png"; // Ensure you have the correct path for the image
import { Link } from "react-router-dom";
const ProduceSection = () => {
  return (
    <div className="w-full bg-black py-4 px-4 text-white">
      <div className="max-w-[1240px] mx-auto text-center">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold pb-2 pt-10 text-[#8C8849]">
          GET SPECIALIZED RECIPIES
        </h1>
        <div className="flex justify-center items-center">
          <img
            className="rounded-3xl border-4 border-white mx-auto my-4 object-cover"
            src={FreshProduceImage}
            alt="Fresh Produce"
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-white py-4">
          Create unique special dishes with:
          <div>
            <ReactTyped
              className="font-bold text-[#B33F62]"
              strings={["ROTTEN BANANAS", "FRESH GRAPES", "UNRIPE APPLE"]}
              typeSpeed={70}
              backSpeed={60}
              loop
            />
          </div>
        </p>

        <Link to="/my-produce">
          <button className="bg-[#2A3340] text-[#ffffff] w-[200px] rounded-md font-medium my-3 mx-auto py-3">
            My Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProduceSection;
