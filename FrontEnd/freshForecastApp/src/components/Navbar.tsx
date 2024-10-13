const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-2 text-white fixed top-0 left-0 right-0 z-50" // Fixed positioning and z-index for stacking
      style={{
        backgroundColor: "var(--verde)",
      }}
    >
      <h1
        className="text-3xl font-bold mx-auto"
        style={{
          color: "var(--blackish)",
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
