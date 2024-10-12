import FreshProduceImage from "../assets/pic1.jpg";

const Hero = () => {
  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={FreshProduceImage}
          alt="Fresh Produce"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">RECIPE SUGGESTIONS</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Transform Fresh Produce into Meals
          </h1>
          <p>
            Get tailored recipes based on the quality of your ingredients,
            helping you reduce waste and enjoy delicious dishes.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Explore Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
