import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-[100%] max-w-[1280px] bg-gray-300 flex justify-between items-center px-6 py-3 rounded-full shadow-md border border-orange-300">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 object-contain border-white border-2 rounded-full"
          />
        </div>
        <ul className="flex gap-6 font-bold text-black text-sm">
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-700 cursor-pointer"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/speakers"
              className="text-black hover:text-gray-700 cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="text-black hover:text-gray-700 cursor-pointer"
            >
              EVENT
            </Link>
          </li>
          <li>
            <Link
              to="/speakers"
              className="text-black hover:text-gray-700 cursor-pointer"
            >
              SPEAKERS
            </Link>
          </li>
          <li>
            <Link
              to="/lastPage"
              className="text-black hover:text-gray-700 cursor-pointer"
            >
              COMMUNITY
            </Link>
          </li>
        </ul>
        <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border-2 border-white hover:bg-orange-600 transition">
          <button className="bg-transparent">POSTMAN COMMUNITY DAY</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
