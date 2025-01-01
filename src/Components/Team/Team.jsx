import React from 'react';
import './Team.css';
import Member1 from '../Assets/Member1.png';
import Member2 from '../Assets/Member2.png';
import Member3 from '../Assets/Member3.jpg';
import Member4 from '../Assets/Member4.jpg';

const Team = () => {
  return (
    <section className="team">
      <h2 className="team-header">OUR VISIONARIES</h2>
      <h3 className="team-subheader">The Team</h3>
      <div className="team-grid">
        <div className="team-member">
          <img src={Member1} alt="Precious Opara" className="team-image" />
          <h4 className="team-name">Precious Opara</h4>
          <p className="team-role">Founder | Product Manager</p>
        </div>
        <div className="team-member">
          <img src={Member2} alt="Ajiohi .F. Otu" className="team-image" />
          <h4 className="team-name">Ajiohi .F. Otu</h4>
          <p className="team-role">Co-founder | Designer | CMO</p>
        </div>
        <div className="team-member">
          <img src={Member3} alt="Team Member 3" className="team-image" />
          <h4 className="team-name">Rasaq Ola</h4>
          <p className="team-role">Developer | Frontend</p>
        </div>
        <div className="team-member">
          <img src={Member4} alt="Team Member 4" className="team-image" />
          <h4 className="team-name">Adekunle Abiodun</h4>
          <p className="team-role">Developer | Backend</p>
        </div>
      </div>
    </section>
  );
};

export default Team;