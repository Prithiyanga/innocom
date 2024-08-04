import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../Styles/Header.css";

const Header = () => {
  function handleScroll() {
    var s = window.scrollY;
    if (s > 30) {
      document.getElementById("header").style.backgroundColor = "white";
      document.getElementById("header").style.boxShadow = "0px 2px 5px grey";
      document.getElementById("header").style.transition = "0.5s";
    } else {
      document.getElementById("header").style.backgroundColor = "transparent";
      document.getElementById("header").style.boxShadow = "none";
      document.getElementById("header").style.transition = "0.5s";
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div id="header" className="header-container">
      <div className="nav-bar">
        <AnchorLink href="#Home" className="nav-item">
          Home
        </AnchorLink>
        <AnchorLink href="#About" className="nav-item">
          About
        </AnchorLink>
        <AnchorLink href="#Network" className="nav-item">
          Network
        </AnchorLink>
        <AnchorLink href="#Gallery" className="nav-item">
          Gallery
        </AnchorLink>
        <AnchorLink href="#Team" className="nav-item">
          Team
        </AnchorLink>
      </div>
    </div>
  );
};

export default Header;
