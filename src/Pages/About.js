import React from "react";
import MisIll from "../Media/Mission_Illust.webp";
import VisIll from "../Media/Vision_Illust.png";
import "../Styles/About.css";

const VisionMission = () => {
  function MissionClick() {
    const bb = document.getElementById("blueBox");
    if (window.innerWidth > 900) {
      bb.style.transform = "translateX(40vw)";
      bb.style.borderTopRightRadius = "inherit";
      bb.style.borderBottomRightRadius = "inherit";
      bb.style.borderBottomLeftRadius = "0px";
      bb.style.borderTopLeftRadius = "0px";
      document.getElementById("vision-statement").style.opacity = "0";
      document.getElementById("mission-statement").style.animation =
        "fade-in 2s";
      document.getElementById("mission-statement").style.opacity = "1";
      document.getElementById("misbut").style.border = "solid 2px white";
      document.getElementById("visbut").style.border = "solid 2px #5382FF";
      document.getElementById("vision-illustration").style.opacity = "1";
      document.getElementById("mission-illustration").style.animation =
        "fade-out-light 1.5s";
      document.getElementById("mission-illustration").style.opacity = "0.1";
      bb.style.transitionDuration = "1.5s";
    } else {
      alert("helo");
      bb.style.transform = "translateY(60vw)";
      bb.style.borderTopRightRadius = "0px";
      bb.style.borderBottomRightRadius = "inherit";
      bb.style.borderBottomLeftRadius = "inherit";
      bb.style.borderTopLeftRadius = "0px";
      document.getElementById("vision-statement").style.opacity = "0";
      document.getElementById("mission-statement").style.animation =
        "fade-in 2s";
      document.getElementById("mission-statement").style.opacity = "1";
      document.getElementById("misbut").style.border = "solid 2px white";
      document.getElementById("visbut").style.border = "solid 2px #5382FF";
      document.getElementById("vision-illustration").style.opacity = "1";
      document.getElementById("mission-illustration").style.animation =
        "fade-out-light 1.5s";
      document.getElementById("mission-illustration").style.opacity = "0.1";
      bb.style.transitionDuration = "1.5s";
    }
  }
  function VisionClick() {
    const bb = document.getElementById("blueBox");
    if (window.innerWidth > 900) {
      bb.style.transform = "translateX(0vw)";
      bb.style.borderTopRightRadius = "0px";
      bb.style.borderBottomRightRadius = "0px";
      bb.style.borderBottomLeftRadius = "inherit";
      bb.style.borderTopLeftRadius = "inherit";
      document.getElementById("mission-statement").style.opacity = "0";
      document.getElementById("vision-statement").style.animation =
        "fade-in 2s";
      document.getElementById("vision-statement").style.opacity = "1";
      document.getElementById("misbut").style.border = "solid 2px #5382FF";
      document.getElementById("visbut").style.border = "solid 2px white";
      document.getElementById("vision-illustration").style.animation =
        "fade-out-light 1.5s";
      document.getElementById("vision-illustration").style.opacity = "0.1";
      document.getElementById("mission-illustration").style.opacity = "1";
      bb.style.transitionDuration = "1.5s";
    } else {
      bb.style.transform = "translateY(0vw)";
      bb.style.borderTopRightRadius = "inherit";
      bb.style.borderBottomRightRadius = "0px";
      bb.style.borderBottomLeftRadius = "0px";
      bb.style.borderTopLeftRadius = "inherit";
      document.getElementById("mission-statement").style.opacity = "0";
      document.getElementById("vision-statement").style.animation =
        "fade-in 2s";
      document.getElementById("vision-statement").style.opacity = "1";
      document.getElementById("misbut").style.border = "solid 2px #5382FF";
      document.getElementById("visbut").style.border = "solid 2px white";
      document.getElementById("vision-illustration").style.animation =
        "fade-out-light 1.5s";
      document.getElementById("vision-illustration").style.opacity = "0.1";
      document.getElementById("mission-illustration").style.opacity = "1";
      bb.style.transitionDuration = "1.5s";
    }
  }

  return (
    <div id="About" className="vm-container">
      <div id="vm-big" className="vm-box">
        <div className="blue-box" id="blueBox"></div>
        <div className="in-vision">
          <img
            src={VisIll}
            alt="Vision Illustration"
            className="vm-illust"
            id="vision-illustration"
          />
          <div className="vm-statement" id="vision-statement">
            INNOCOM aims to pave innovative paths to make every KCG Tech
            student's journey significant.
          </div>
          <div className="vision-button" id="visbut" onClick={VisionClick}>
            VISION
          </div>
        </div>
        <div className="in-mission">
          <img
            src={MisIll}
            alt="Mission Illustration"
            className="vm-illust"
            id="mission-illustration"
          />
          <div className="vm-statement" id="mission-statement">
            Break the common engineering mindset by creating new paths and
            hosting various awareness sessions. <br /> <br />
            Conduct events and workshops to bring out the inner mastery of the
            students and develop their skills. <br /> <br />
            Expand the network through industry connects.
          </div>
          <div className="mission-button" id="misbut" onClick={MissionClick}>
            MISSION
          </div>
        </div>
      </div>
      <div id="vm-small" className="vm-box">
        <div className="in-vision">
          <img
            src={VisIll}
            alt="Vision Illustration"
            className="vm-illust"
            id="vision-illustration"
          />
          <div className="vm-statement" id="vision-statement">
            INNOCOM aims to pave innovative paths to make every KCG Tech
            student's journey significant.
          </div>
          <div className="vision-button" id="visbut">
            VISION
          </div>
        </div>
        <div className="in-mission">
          <img
            src={MisIll}
            alt="Mission Illustration"
            className="vm-illust"
            id="vision-illustration"
          />
          <div className="vm-statement" id="vision-statement">
            Break the common engineering mindset by creating new paths and
            hosting various awareness sessions. <br /> <br />
            Conduct events and workshops to bring out the inner mastery of the
            students and develop their skills. <br /> <br />
            Expand the network through industry connects.
          </div>
          <div className="vision-button" id="misbut">
            MISSION
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
