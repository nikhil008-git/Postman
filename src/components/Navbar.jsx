import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import GridBackground from "./GridBackground";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`w-full flex justify-center fixed top-0 z-50 ${location.pathname === '/team' ? 'bg-black' : 'bg-white'}`}>
      
      <div className="w-[100%] max-w-[1280px] bg-gray-300 flex justify-between items-center px-6 py-3 my-4 rounded-full shadow-md border border-orange-300">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 text-black object-contain border-white border-2 rounded-full"
            />
          </Link>
        </div>
        <div className="text-black flex gap-6 text-sm">
          <Link
            to="/"
            className={`font-extrabold cursor-pointer ${
              isActive("/") ? "text-orange-500" : "text-black hover:text-gray-700"
            }`}
          >
            HOME
          </Link>
          <Link
            to="/speakers"
            className={`cursor-pointer font-extrabold ${
              isActive("/speakers") ? "text-orange-500" : "text-black hover:text-gray-700"
            }`}
          >
            ABOUT
          </Link>
          <Link
            to="/team"
            className={`cursor-pointer font-extrabold ${
              isActive("/team") ? "text-orange-500" : "text-black hover:text-gray-700"
            }`}
          >
            EVENT
          </Link>
          <Link
            to="/speakers"
            className={`cursor-pointer font-extrabold ${
              isActive("/speakers") ? "text-orange-500" : "text-black hover:text-gray-700"
            }`}
          >
            SPEAKERS
          </Link>
          <Link
            to="/lastPage"
            className={`cursor-pointer font-extrabold ${
              isActive("/lastPage") ? "text-orange-500" : "text-black hover:text-gray-700"
            }`}
          >
            COMMUNITY
          </Link>
        </div>
        <Link to="/lastPage">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border-2 border-white hover:bg-orange-600 transition">
            POSTMAN COMMUNITY DAY
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
