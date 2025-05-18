import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import wave from "../assets/footer.png";

const Footer = () => (
    <footer
    className="w-screen relative overflow-hidden bg-white"
    style={{
      height: "410px",
    }}
  >
    <img
      src={wave}
      alt="Wave background"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "155%",
        objectFit: "cover",
        zIndex: 0,
      }}
    />

    <div className="relative z-10 w-full flex flex-row justify-around items-center uppercase font-bold mt-40 gap-2">
      <div className="flex flex-col justify-between items-center max-w-sm text-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Postman Logo" className="w-10 h-10" />
        <h2 className="text-black font-bold text-xl">
            Postman Community Pune  
          </h2>
        </div>
        <p className="text-black text-sm mt-4 font-semibold">
          A vibrant community of API enthusiasts in Pune, dedicated to knowledge
          sharing, collaboration, and advancing the API ecosystem.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-black text-2xl font-bold mb-4">QUICK LINKS</h3>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col items-start space-y-2">
            <Link to="/" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>Home</Link>
            <Link to="/speakers" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>Speakers</Link>
            <Link to="/team" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>About</Link>
            <Link to="/lastPage" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>Community</Link>
            <Link to="/team" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>Team</Link>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <Link to="/" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>Home</Link>
            <Link to="/speakers" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>Speakers</Link>
            <Link to="/team" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>About</Link>
            <Link to="/lastPage" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>Community</Link>
            <Link to="/team" className="text-black text-sm font-bold" style={{color: "black", fontSize: "12px", fontWeight: "semibold"}}>Team</Link>
          </div>
        </div>
      </div>

      <div className="text-black text-center">
        <h3 className="text-2xl font-bold mb-4">CONTACT</h3>
        <p className="text-black text-sm font-semibold">PUNE, MAHARASHTRA, INDIA</p>
        <p className="text-black text-sm font-semibold">Postmancommunitypune@gmail.com</p>
        <p className="text-black text-sm font-semibold">+91 7889564517</p>
      </div>
      <div className="w-60"></div>
      <div className="w-60"></div>
    </div>
  </footer>
);

export default Footer;
