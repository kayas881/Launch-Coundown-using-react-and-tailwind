import React from "react";
import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="socials absolute bottom-[30px] max-md:bottom-2 left-[50%] z-[999] translate-x-[-50%]">
      <ul className="flex">
        <li>
          <img src={Facebook} alt="" />
        </li>
        <li>
          <img src={Instagram} alt="" />
        </li>
        <li>
          <img src={Pinterest} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
