const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-2 text-white" // Changed h-24 to h-16 and px-4 to px-2
      style={{
        backgroundColor: "var(--verde)",
      }}
    >
      <h1
        className="text-3xl font-bold mx-auto" // Optional: adjust the font size if needed
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
