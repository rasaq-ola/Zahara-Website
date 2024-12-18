import React from 'react'
import './Info.css'
import InfoImage from '../Assets/InfoImage.png'

const Info = () => {
  return (
      <section className="info-section">
        <div className="info-content-wrapper">
          <div className="info-text-content">
            <h2>Did you know?</h2>
            <p>
            Over 70% of people search online for health information before consulting a doctor, but often end up more confused.
            </p>
          </div>
          <div className="info-image-content">
            <img src={InfoImage} alt="Informative" />
          </div>
        </div>
      </section>
    );
};

export default Info;