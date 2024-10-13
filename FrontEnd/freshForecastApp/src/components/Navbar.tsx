import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar shape change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        scrolled ? "h-12 shadow-lg" : "h-20"
      }`}
      style={{
        backgroundColor: "var(--verde)",
        clipPath: scrolled
          ? "ellipse(100% 100% at 65% 0%)"
          : "ellipse(90% 85% at 50% 10%)", // Changes shape dynamically on scroll
      }}
    >
      <div className="flex justify-center items-center h-full max-w-[1240px] mx-auto px-4">
        <h1
          className="text-3xl font-bold"
          style={{
            color: "var(--blackish)",
          }}
        >
          <Link to="/">Crisp.AI</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li className="p-4 border-b border-[var(--orange)] text-[var(--whitish)]">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-[var(--medium-gray)] text-[var(--whitish)]">
            <Link to="/scan">Scan Produce</Link>
          </li>
          <li className="p-4 border-b border-[var(--medium-gray)] text-[var(--whitish)]">
            <Link to="/my-produce">Recipes</Link>
          </li>
        </ul>

        {/* Hamburger Icon for mobile (optional, add later if needed) */}
      </div>
    </div>
  );
};

export default Navbar;
