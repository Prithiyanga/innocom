import React from "react";
import g1 from "../Media/Gallery/1.jpg";
import g2 from "../Media/Gallery/2.png";
import g3 from "../Media/Gallery/3.jpg";
import g4 from "../Media/Gallery/4.jpg";
import g5 from "../Media/Gallery/5.jpg";
import g6 from "../Media/Gallery/6.jpg";
import g7 from "../Media/Gallery/7.jpg";
import g8 from "../Media/Gallery/8.jpg";
import g9 from "../Media/Gallery/9.jpg";
import "../Styles/Gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="gallery-container" id="Gallery">
        <div className="team-head">GALLERY</div>
        <div className="gallery-content">
          <img src={g1} className="galimg" />
          <img src={g2} className="galimg" />
          <img src={g3} className="galimg" />
          <img src={g4} className="galimg" />
          <img src={g5} className="galimg" />
          <img src={g6} className="galimg" />
          <img src={g7} className="galimg" />
          <img src={g8} className="galimg" />
          <img src={g9} className="galimg" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
