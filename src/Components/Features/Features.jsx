import React from 'react'
import './Features.css'
import Ellipse from "../Assets/Ellipse.png"
import FeatureImage from "../Assets/FeatureImage.png"

const Features = () => {
  return (
    <section className="features-section">
  {/* Header Section */}
  <header>
    <h2 className="features-header">POWERFUL TOOLS, PERSONAL CARE</h2>
    <div className="features-subheader">
      <img src={Ellipse} className="features-oval" />
      <span>Key Features of MedAI</span>
    </div>
    <p className="features-description">
      Discover the tools that make managing your health easier, smarter, and more personalized.
    </p>
  </header>

  {/* Features Content */}
  <div className="features-content">
    {/* Left: Text Content */}
    <div className="features-text">
      {/* Feature 1 */}
      <div className="feature-item">
        <div className="feature-icon">
          <span>1</span>
        </div>
        <div className="feature-text">
          <h3>Symptom Analysis</h3>
          <p>Get a quick and accurate analysis of symptoms with cutting-edge AI technology.</p>
        </div>
      </div>
      {/* Separator between features */}
      <div className="feature-separator"></div>
      {/* Feature 2 */}
      <div className="feature-item">
        <div className="feature-icon">
          <span>2</span>
        </div>
        <div className="feature-text">
          <h3>Health Tracking</h3>
          <p>Track your vital health statistics and monitor progress over time effortlessly.</p>
        </div>
      </div>
      {/* Separator between features */}
      <div className="feature-separator"></div>
      {/* Feature 3 */}
      <div className="feature-item">
        <div className="feature-icon">
          <span>3</span>
        </div>
        <div className="feature-text">
          <h3>Personalized Insights</h3>
          <p>Receive personalized recommendations tailored to your health goals and history.</p>
        </div>
      </div>
    </div>

    {/* Right: Image */}
    <div className="features-image">
      <img src={FeatureImage} alt="MedAI Key Features" />
    </div>
  </div>
</section>
  
  )
}

export default Features;