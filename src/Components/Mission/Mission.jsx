import React from 'react';
import './Mission.css';
import TargetImage from '../Assets/TargetImage.png';

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission-image">
        <img src={TargetImage} alt="Target" className="target-image" />
      </div>
      <div className="mission-content">
        <h1 className="mission-title">Our mission</h1>
        <p className="mission-description">
          Our mission is to bridge this gap by providing accessible, reliable, and personalized health
          information and services. Through our innovative platform, users can access AI-powered symptom
          analysis, connect with a supportive community, and easily locate nearby healthcare facilities.
        </p>
      </div>
    </section>
  );
};

export default Mission;
