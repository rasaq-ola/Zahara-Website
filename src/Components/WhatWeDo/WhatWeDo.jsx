import React from 'react';
import './WhatWeDo.css';
import AboutUs from "../Assets/AboutUS.png"

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="what-we-do-image">
        <img src={AboutUs} alt="Zahara Health" className="about-image" />
      </div>
      <div className="what-we-do-content">
        <h3 className="section-title">WHO ARE WE?</h3>
        <h1 className="about-title">About us</h1>
        <p className="about-description">
          Zahara Health is a digital health platform dedicated to improving the health and well-being of Africans. 
          We understand the challenges faced in accessing quality healthcare in Nigeria (Africa) including the 
          long wait times, misinformation, and limited human resources.
        </p>
        <p className="about-description">
          We believe that technology has the power to transform healthcare in Africa. By combining cutting-edge 
          technology with a deep understanding of the African context, Zahara Health is committed to empowering 
          individuals to take control of their health and well-being.
        </p>
        <p className="about-description">
          Join us in our journey to build a healthier Africa.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
