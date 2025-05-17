import React from "react";
import footerImg from "../assets/Footer.png";

const Footer = () => (
  <footer
    className="w-full bg-white"
    style={{
      height: "120px",
      backgroundImage: `url(${footerImg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  />
);

export default Footer;
