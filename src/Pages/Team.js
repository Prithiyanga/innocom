import React from "react";
import Hod from "../Media/Team/HOD.jpg";
import Found1 from "../Media/Team/Prithiyanga.jpg";
import qm1 from "../Media/Team/SQ1.jpeg";
import qm2 from "../Media/Team/SQ2.jpeg";
import qm3 from "../Media/Team/SQ3.jpeg";
import qm5 from "../Media/Team/SQ4.jpeg";
import qm6 from "../Media/Team/SQ5.jpeg";
import qm4 from "../Media/Team/SQ6.jpg";
import qm7 from "../Media/Team/SQ7.jpeg";
import qm8 from "../Media/Team/SQ8.jpg";
import qm9 from "../Media/Team/SQ9.jpeg";
import Found2 from "../Media/Team/Sriram.jpg";
import Treasurer from "../Media/Team/Treasurer.jpeg";
import VP from "../Media/Team/Vice_President.jpg";
import VS from "../Media/Team/Vice_Secretary.jpg";
import "../Styles/Team.css";

const Team = () => {
  return (
    <div id="Team" className="team-container">
      <div className="team-head">THE TEAM</div>
      <div className="founders-block">
        <div className="role">
          <img src={Hod} alt="HOD - DR. Cloudin S" className="founder-pic" />
          <div className="founder-desc">
            <div className="founder-name">DR. CLOUDIN S</div>
            <div className="founder-role">HOD - CSE</div>
          </div>
        </div>
      </div>
      <div className="founders-block">
        <div className="role">
          <img
            src={Found1}
            alt="Founder 1: Prithiyanga"
            className="founder-pic"
          />
          <div className="founder-desc">
            <div className="founder-name">PRITHIYANGA</div>
            <div className="founder-role">Founder, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img src={Found2} alt="Founder 2: SRIRAM V" className="founder-pic" />
          <div className="founder-desc">
            <div className="founder-name">SRIRAM V</div>
            <div className="founder-role">Founder, INNOCOM</div>
          </div>
        </div>
      </div>

      <div className="advisors-block">
        <div className="role">
          <img
            src={VP}
            alt="Advisor: Harish Karthick D"
            className="advisor-pic"
          />
          <div className="advisor-desc">
            <div className="advisor-name">HARISH KARTHICK D</div>
            <div className="advisor-role">President, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img src={VS} alt="Advisor: Jerem Mathew A" className="advisor-pic" />
          <div className="advisor-desc">
            <div className="advisor-name">Jerem Mathew A</div>
            <div className="advisor-role">Secretary, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img
            src={Treasurer}
            alt="Advisor: Aishwarya S"
            className="advisor-pic"
          />
          <div className="advisor-desc">
            <div className="advisor-name">Aishwarya S</div>
            <div className="advisor-role">Treasurer, INNOCOM</div>
          </div>
        </div>
      </div>
      <div className="quango-block">
        <div className="role">
          <img src={qm1} alt="quango: Dhanavathi K" className="quango-pic" />
          <div className="quango-desc">
            <div className="quango-name">Dhanavathi K</div>
            <div className="quango-role">Quango Member, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img src={qm2} alt="quango: Hariharan R" className="quango-pic" />
          <div className="quango-desc">
            <div className="quango-name">Hariharan R</div>
            <div className="quango-role">Quango Member, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img src={qm3} alt="quango: Ishwar R" className="quango-pic" />
          <div className="quango-desc">
            <div className="quango-name">Ishwar R</div>
            <div className="quango-role">Quango Member, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img
            src={qm4}
            alt="quango: Nihaarika Bhavan"
            className="quango-pic"
          />
          <div className="quango-desc">
            <div className="quango-name">Nihaarika Bhavan</div>
            <div className="quango-role">Quango Member, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img src={qm5} alt="quango:Kishore Kumar S" className="quango-pic" />
          <div className="quango-desc">
            <div className="quango-name">Kishore Kumar S</div>
            <div className="quango-role">Quango Member, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img
            src={qm6}
            alt="quango: Nihaarika Bhavan"
            className="quango-pic"
          />
          <div className="quango-desc">
            <div className="quango-name">Raghul Prasanna B</div>
            <div className="quango-role">Quango Member, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img src={qm7} alt="quango: K Sankhya" className="quango-pic" />
          <div className="quango-desc">
            <div className="quango-name">Soban N D</div>
            <div className="quango-role">Quango Member, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img src={qm8} alt="quango: Sweta Yadav" className="quango-pic" />
          <div className="quango-desc">
            <div className="quango-name">Sweta Yadav</div>
            <div className="quango-role">Quango Member, INNOCOM</div>
          </div>
        </div>
        <div className="role">
          <img
            src={qm9}
            alt="quango: Nihaarika Bhavan"
            className="quango-pic"
          />
          <div className="quango-desc">
            <div className="quango-name">Vijayaraj A</div>
            <div className="quango-role">Quango Member, INNOCOM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
