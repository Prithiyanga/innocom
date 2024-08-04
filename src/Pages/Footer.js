import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import logo from "../Media/Logo.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <img className="ft-in-logo" src={logo} alt="Innocom Logo" />
        <div className="links">
          <div className="link">
            <FaLinkedin className="link-icon" />
            <div className="link-text">Innocom_CSE</div>
          </div>
          <div className="link">
            <IoMdMailUnread className="link-icon" />
            <div className="link-text">innocom.2k23@gmail.com</div>
          </div>
          <div className="link">
            <FaSquareInstagram className="link-icon" />
            <a
              className="link-text"
              href="https://www.instagram.com/innocomkcg?igsh=bjg3d2FrMGhjeHlk"
            >
              innocomkcg
            </a>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="copyrights">
          Designed & Developed By Mitbots | 2024{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
