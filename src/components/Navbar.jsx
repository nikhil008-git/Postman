import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="w-full fixed top-0 z-30 bg-white flex flex-col items-center">
      <div className="w-full max-w-3xl bg-gray-300 flex justify-between items-center pr-0 my-2 sm:py-3 md:py-2 rounded-full shadow-md border border-orange-300 sm:px-2 lg:px-4">
        <div className="flex items-center flex-shrink-0 mr-4">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-14  w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain border-white border-2 rounded-full"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-extrabold text-black">
          <Link to="/" className="cursor-pointer" style={{ color: "black" }}>
            HOME
          </Link>
          <a
            href="/aboutus"
            className="cursor-pointer"
            style={{ color: "black" }}
          >
            ABOUT
          </a>
          <Link
            to="/event"
            className="cursor-pointer"
            style={{ color: "black" }}
          >
            EVENT
          </Link>
          <Link
            to="/speakers"
            className="cursor-pointer"
            style={{ color: "black" }}
          >
            SPEAKERS
          </Link>
          <Link
            to="/team"
            className="cursor-pointer"
            style={{ color: "black" }}
          >
            TEAM
          </Link>
        </div>

        <Link to="/lastPage" className="hidden md:block">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border-2 border-white hover:bg-orange-600 transition">
            POSTMAN COMMUNITY DAY
          </div>
        </Link>

        <div className="md:hidden">
          <button className="text-black" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="w-full max-w-6xl bg-gray-300 rounded-xl shadow-md border m-2 mx-10 border-orange-300 px-6 py-4 flex flex-col items-center text-sm font-extrabold text-black md:hidden">
          <Link to="/" className="block mb-2" style={{ color: "black" }}>
            HOME
          </Link>
          <a href="/aboutus" className="block mb-2" style={{ color: "black" }}>
            ABOUT
          </a>
          <Link to="/event" className="block mb-2" style={{ color: "black" }}>
            EVENT
          </Link>
          <Link
            to="/speakers"
            className="block mb-2"
            style={{ color: "black" }}
          >
            SPEAKERS
          </Link>
          <Link to="/team" className="block mb-4" style={{ color: "black" }}>
            TEAM
          </Link>
          <Link to="/lastPage">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border-2 border-white hover:bg-orange-600 transition">
              POSTMAN COMMUNITY DAY
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
