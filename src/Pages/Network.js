import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ad1 from "../Media/Advisory_Board/Agni.jpeg";
import ad9 from "../Media/Advisory_Board/alex.jpeg";
import ad3 from "../Media/Advisory_Board/charles.jpeg";
import ad4 from "../Media/Advisory_Board/janarthan.jpeg";
import ad10 from "../Media/Advisory_Board/jegatheesan.jpeg";
import ad5 from "../Media/Advisory_Board/kumar.jpeg";
import ad2 from "../Media/Advisory_Board/msk.jpeg";
import ad7 from "../Media/Advisory_Board/shiny.png";
import ad8 from "../Media/Advisory_Board/sudarsun.png";
import ad6 from "../Media/Advisory_Board/vineeth.png";
import im7 from "../Media/Industry_Mentors/Chandra_Divya.jpeg";
import im10 from "../Media/Industry_Mentors/dhanush.jpeg";
import im9 from "../Media/Industry_Mentors/karan.jpeg";
import im8 from "../Media/Industry_Mentors/kiridharan.jpeg";
import im5 from "../Media/Industry_Mentors/Martin.jpeg";
import im4 from "../Media/Industry_Mentors/Rekha.jpeg";
import im11 from "../Media/Industry_Mentors/sabesh.jpeg";
import im2 from "../Media/Industry_Mentors/Sai_Manjunath.jpeg";
import im3 from "../Media/Industry_Mentors/Sundarapandian.jpeg";
import im6 from "../Media/Industry_Mentors/Velu.jpeg";
import im1 from "../Media/Industry_Mentors/vishal.jpeg";
import NW1 from "../Media/Network_Logos/NW1.png";
import NW2 from "../Media/Network_Logos/NW2.jpeg";
import NW3 from "../Media/Network_Logos/NW3.png";
import NW4 from "../Media/Network_Logos/NW4.webp";
import NW5 from "../Media/Network_Logos/NW5.jpeg";
import "../Styles/Network.css";

const Network = () => {
  return (
    <div id="Network">
      <div className="nw-container">
        <div className="top-text">Advisory Board</div>
        <div className="advb-content">
          At INNOCOM, we are privileged to be guided by our distinguished
          Advisory Board, composed of renowned experts and leaders across
          various industries. Their strategic insights and profound expertise
          are instrumental in shaping our community's direction and initiatives.
          The Advisory Board's counsel ensures that INNOCOM continues to
          innovate and excel, staying true to our mission of fostering a
          collaborative and forward-thinking environment.
        </div>
        <div className="advb-cont">
          <div className="advb-card">
            <img className="adv-photo" src={ad2} alt="Agni" />
            <div className="adv-details">
              <div className="adv-name">
                Mr. Mahadevan Senthil Kumar{" "}
                <a href="https://www.linkedin.com/in/mskciso/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">
                Global Practice Head-Cyber & Cloud Security Architecture
              </div>
              <div className="adv-post company">WIPRO</div>
            </div>
          </div>
          <div className="advb-card-right">
            <div className="adv-details">
              <div className="adv-name">
                Mr. Charles Godwin <a></a>
                <a href="https://www.linkedin.com/in/charlesgodwin/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">HR Leader & Public Speaker</div>
              <div className="adv-post company">Zoho corporation</div>
            </div>
            <img className="adv-photo" src={ad3} alt="Agni" />
          </div>
          <div className="advb-card">
            <img className="adv-photo" src={ad4} alt="Agni" />
            <div className="adv-details">
              <div className="adv-name">
                Mr. Janarthanan S <a></a>
                <a href="https://www.linkedin.com/in/janarthananselvaraj/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">Senior Specialist & AI Expert</div>
              <div className="adv-post company">Eviden</div>
            </div>
          </div>
          <div className="advb-card-right">
            <div className="adv-details">
              <div className="adv-name">
                Mr. Kumar Sachidanandam <a></a>
                <a href="https://www.linkedin.com/in/kumarsachi/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">Co-Founder</div>
              <div className="adv-post company">Ydealogy Ventures</div>
            </div>
            <img className="adv-photo" src={ad5} alt="Agni" />
          </div>
          <div className="advb-card">
            <img className="adv-photo" src={ad6} alt="Agni" />
            <div className="adv-details">
              <div className="adv-name">
                Mr. Vineeth V S<a></a>
                <a href="https://www.linkedin.com/in/vineeth-v-s-09196215/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">Principal Consultant</div>
              <div className="adv-post company">LTIMindtree</div>
            </div>
          </div>
          <div className="advb-card-right">
            <div className="adv-details">
              <div className="adv-name">
                Mr. Agni G<a></a>
                <a href="https://www.linkedin.com/in/agni-g-9b7b6519/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">Innovation Project Manager</div>
              <div className="adv-post company">Nokia Solutions & Networks</div>
            </div>
            <img className="adv-photo" src={ad1} alt="Agni" />
          </div>
          <div className="advb-card">
            <img className="adv-photo" src={ad7} alt="Agni" />
            <div className="adv-details">
              <div className="adv-name">
                Mr. Shiny S U<a></a>
                <a href="https://www.linkedin.com/in/shiny-s-u/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">Engineering Leader</div>
              <div className="adv-post company">Kriyadocs</div>
            </div>
          </div>
          <div className="advb-card-right">
            <div className="adv-details">
              <div className="adv-name">
                Mr. Sudarsun Santhiappan <a></a>
                <a href="https://www.linkedin.com/in/sudarsun/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">
                Lead Researcher & Chief Scientific Officer
              </div>
              <div className="adv-post company">
                Centre For Responsible AI (CeRAI)| BUDDI AI
              </div>
            </div>
            <img className="adv-photo" src={ad8} alt="Agni" />
          </div>
          <div className="advb-card">
            <img className="adv-photo" src={ad9} alt="Agni" />
            <div className="adv-details">
              <div className="adv-name">
                Mr. Alex Mathew <a></a>
                <a href="https://www.linkedin.com/in/alex-mathew-1a2912b/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">Solution Architect - UI UX</div>
              <div className="adv-post company">HCL Technologies</div>
            </div>
          </div>
          <div className="advb-card-right">
            <div className="adv-details">
              <div className="adv-name">
                Mr. Jegatheesan Veeramalai <a></a>
                <a href="https://www.linkedin.com/in/jegatheesan-veeramalai-4a34363/">
                  <FaLinkedin className="lin-icon" />
                </a>
              </div>
              <div className="adv-post">Senior Expert, Systems Integration</div>
              <div className="adv-post company">Magna International</div>
            </div>
            <img className="adv-photo" src={ad10} alt="Agni" />
          </div>
        </div>
        <div className="middle">
          <div className="logo-slide">
            <img className="network_logo" src={NW1} alt="Nokia" />
            <img className="network_logo" src={NW2} alt="IET" />
            <img className="network_logo" src={NW3} alt="Geeks For Geeks" />
            <img className="network_logo" src={NW4} alt="Buddi AI" />
            <img className="network_logo" src={NW5} alt="Nipix" />
          </div>
          <div className="logo-slide">
            <img className="network_logo" src={NW1} alt="Nokia" />
            <img className="network_logo" src={NW2} alt="IET" />
            <img className="network_logo" src={NW3} alt="Geeks For Geeks" />
            <img className="network_logo" src={NW4} alt="Buddi AI" />
            <img className="network_logo" src={NW5} alt="Nipix" />
          </div>
        </div>
        <div className="top-text" style={{ marginTop: "15vh" }}>
          Industry Mentors{" "}
        </div>
        <div className="advb-content">
          INNOCOM is proud to be supported by a network of accomplished Industry
          Mentors who bring a wealth of experience and knowledge from their
          respective fields. Our mentors play a crucial role in guiding and
          inspiring our community members, providing practical insights, career
          advice, and professional development opportunities. Their mentorship
          empowers our members to achieve their full potential and drive
          innovation within our community.
        </div>
        <div style={{ marginTop: "30px" }}>
          <div className="im-cards">
            <div className="im-card">
              <img src={im1} className="im-img" id="Agni" />
              <div className="im-name">Mr. Vishal N</div>
              <div className="im-role">
                Engineer - Technology
                <br />
                Virtusa
              </div>
            </div>
            <div className="im-card">
              <img src={im2} className="im-img" id="Agni" />
              <div className="im-name">Mr. Sai Manjunath S</div>
              <div className="im-role">
                Software Engineer <br />
                Cisco Systems
              </div>
            </div>
            <div className="im-card">
              <img src={im3} className="im-img" id="Agni" />
              <div className="im-name">Mr. Sundarapandian R</div>
              <div className="im-role">
                Member Technical Staff
                <br />
                Zoho corporation
              </div>
            </div>
            <div className="im-card">
              <img src={im4} className="im-img" id="Agni" />
              <div className="im-name">Ms. R Rekha</div>
              <div className="im-role">
                Senior Quality Analyst
                <br />
                TVSNext{" "}
              </div>
            </div>
            <div className="im-card">
              <img src={im5} className="im-img" id="Agni" />
              <div className="im-name">Mr. Martin Raj</div>
              <div className="im-role">
                Senior Android Developer
                <br /> BlackBelt SmartPhone Defence Ltd
              </div>
            </div>
            <div className="im-card">
              <img src={im6} className="im-img" id="Agni" />
              <div className="im-name">Mr. Velu Karunanidhi</div>
              <div className="im-role">
                Technical Lead
                <br /> WIPRO
              </div>
            </div>
            <div className="im-card">
              <img src={im7} className="im-img" id="Agni" />
              <div className="im-name">Ms. Chandra Divya R</div>
              <div className="im-role">
                Consultant
                <br />
                Temenos
              </div>
            </div>
            <div className="im-card">
              <img src={im8} className="im-img" id="Agni" />
              <div className="im-name">Mr. Kiridharan S</div>
              <div className="im-role">
                Software Engineer
                <br />
                The Viswa Groups
              </div>
            </div>
            <div className="im-card">
              <img src={im9} className="im-img" id="Agni" />
              <div className="im-name">Mr. Karan Sanjeev</div>
              <div className="im-role">
                Full Stack Developer & Tech Consultant
                <br /> InScrompT
              </div>
            </div>
            <div className="im-card">
              <img src={im10} className="im-img" id="Agni" />
              <div className="im-name">Mr. Dhanush N</div>
              <div className="im-role">
                Founder & CEO
                <br /> Interain intelligence private limited
              </div>
            </div>
            <div className="im-card">
              <img src={im11} className="im-img" id="Agni" />
              <div className="im-name">Mr. Sabesh Kumar</div>
              <div className="im-role">
                AR/VR Use-case Analyst
                <br /> Alstom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
