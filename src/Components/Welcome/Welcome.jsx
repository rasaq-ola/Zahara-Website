import React from 'react'
import './Welcome.css'
import welcomeicon from '../Assets/welcomeicon.png'
import Homepage from '../Assets/Homepage.png'
import Zahara_AI from '../Assets/Zahara_AI.png'
import MED_AI from '../Assets/MED_AI.png'
import smalllogo1 from '../Assets/smalllogo1.png'
import logo from '../Assets/logo.png'

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>HELLO!</h1>
          <span><img src={welcomeicon} /></span>
          <h2>Welcome to Zahara Health Ltd</h2>
          <p>
            We believe that managing your health should be as simple and empowering as possible. 
            That’s why we created MedAI, an intelligent health platform designed to put you in 
            control of your wellbeing.
          </p>
          <div className="cta-container">
            <button className="cta-button">Sign up for free</button>
            <span className="cta-text">Transforming health journey with MedAI</span>
          </div>
        </div>
        <div className="image-content">
          <img src={Homepage}/>
        </div>
      </div>
      <div className="logo-section">
        <h2>OUR LOGO</h2>
        <div className="logo-container">
          <img className='logo-container1' src={smalllogo1}/>
          <img className='logo-container1' src={Zahara_AI}/>
          <img className='logo-container1' src={MED_AI} alt="Logo 3"/>
          <img className='logo-container1' src={logo} alt="Logo 3"/>
        </div>
      </div>
    </section>
  );
};

export default Welcome;