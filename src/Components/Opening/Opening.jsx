import React from 'react';
import './Opening.css';
import OpeningImage from '../Assets/OpeningImage.png'
import { Link } from 'react-router-dom';

const Opening = () => {
  return (
    <section className="opening-section">
      <div className="opening-content">
        <h1 className="opening-title">Zahara Health</h1>
        <p className="opening-subtitle">Empowering health in Africa, One user at a time</p>
        <button className="opening-button"><Link style={{textDecoration: 'none', color: 'white'}} to='/Pages/NoJobs' >Check for openings</Link></button>
      </div>
      <div className="opening-image">
        <img src={OpeningImage} alt="Doctor with AI hologram" />

      </div>
    </section>
  );
};

export default Opening;
