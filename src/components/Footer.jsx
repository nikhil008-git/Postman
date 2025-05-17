import React from "react";
import footerImg from "../assets/Footer.svg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full relative" style={{ height: "120px" }}>
    <img
      src={footerImg}
      alt="Footer background"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{ zIndex: 0 }}
    />
    <div className="w-full bg-white flex flex-row justify-around items-center uppercase font-bold py-6 relative z-10">
      <div className="flex flex-col justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Postman Logo" className="w-10 h-10" />
          <h2 className="text-black text-2xl font-bold my-4">
            Postman Community Pune
          </h2>
        </div>
        <div className="text-black w-100 font-bold uppercase">
          A vibrant community of API enthusiasts in Pune, dedicated to knowledge
          sharing, collaboration, and advancing the API ecosystem.
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <h2 className="text-black text-2xl font-bold my-4">QUICK LINKS</h2>
        <div className="flex flex-row justify-between items-center gap-6">
          <div className="flex flex-col justify-between items-center">
            <Link
              to="/"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Home
            </Link>
            <Link
              to="/speakers"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Speakers
            </Link>
            <Link
              to="/team"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              About
            </Link>
            <Link
              to="/lastPage"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Community
            </Link>
            <Link
              to="/team"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Team
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link
              to="/"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Home
            </Link>
            <Link
              to="/speakers"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Speakers
            </Link>
            <Link
              to="/team"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              About
            </Link>
            <Link
              to="/lastPage"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Community
            </Link>
            <Link
              to="/team"
              className="text-black"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Team
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-black text-2xl font-bold my-4">CONTACT</h2>
        <p className="text-black">PUNE, MAHARASHTRA, INDIA</p>
        <p className="text-black">Postmancommunitypune@gmail.com</p>
        <p className="text-black">+91 7889564517</p>
      </div>
    </div>
  </footer>
);

export default Footer;
