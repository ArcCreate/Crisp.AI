import { ReactTyped } from "react-typed"; // Ensure correct import
import FreshProduceImage from "../assets/pic1.jpg"; // Ensure you have the correct path for the image

const ProduceSection = () => {
  return (
    <div className="w-full bg-black py-4 px-4 text-white">
      <div className="max-w-[1240px] mx-auto text-center">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold pb-2 pt-6 text-[#8C8849]">
          MONITOR YOUR PRODUCE
        </h1>
        <div className="flex justify-center items-center">
          <img
            className="rounded-lg border-2 border-[#2A3340] mx-auto my-4 object-cover"
            src={FreshProduceImage}
            alt="Fresh Produce"
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-white py-4">
          Get notified when your produce is
          <div>
            <ReactTyped
              className="font-bold text-[#EC8516]"
              strings={["ROTTEN", "FRESH", "UNRIPED"]}
              typeSpeed={70}
              backSpeed={60}
              loop
            />
          </div>
        </p>

        <button className="bg-[#2A3340] text-[#EC8516] w-[200px] rounded-md font-medium my-3 mx-auto py-3">
          My Produce
        </button>
      </div>
    </div>
  );
};

export default ProduceSection;
