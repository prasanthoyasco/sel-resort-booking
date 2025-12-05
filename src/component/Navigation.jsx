import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20); // add sticky class after scrolling 20px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-100 transition-all duration-300
        ${isSticky 
          ? "backdrop-blur-xl bg-black/20 border-b border-white/20 shadow-lg"
          : "bg-transparent backdrop-blur-0 pt-5"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-10 px-6 py-4 text-white font-medium">
        <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/" className="hover:text-gray-300 transition">About</Link>
        <Link to="/" className="hover:text-gray-300 transition">Contact</Link>
        <Link to="/" className="hover:text-gray-300 transition">Aminities</Link>
        </div>

        <div className="h-full w-36 mx-auto flex items-center rounded-full">
            <img src="/sel_logo_white.png" alt="sel Hospitality" className="aspect-auto" />
        </div>

        <div className="ml-auto">
          <button className="px-6 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
