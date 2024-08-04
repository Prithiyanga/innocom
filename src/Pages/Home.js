import Spline from "@splinetool/react-spline";
import React from "react";
import deplogo from "../Media/Dept_Logo.png";
import logo from "../Media/Logo.png";
import "../Styles/Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div id="Home" className="home-container">
        <Header />
        <img className="inn-logo" src={logo} alt="Innocom Logo" />
        <img className="dept-logo" src={deplogo} alt="CSE Department Logo" />
        <div className="home-body">
          <div className="home-section">
            <div className="heading">INNOCOM</div>
            <hr className="head-cap-separator" />
            <div className="caption">Inspire to Innovate</div>
            <br />
            <br />
            <div className="description">
              "Empowering Future Innovators - Path to Distinguished Success"
            </div>
            <a
              href="https://innovatehub.vercel.app/"
              target="window"
              className="innovate-hub"
            >
              Go to Innovate Hub
            </a>
          </div>
          <div className="home-section">
            <Spline scene="https://prod.spline.design/CUACTVxhyGcPlKuV/scene.splinecode" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
