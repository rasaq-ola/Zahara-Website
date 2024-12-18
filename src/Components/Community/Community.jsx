import React from 'react';
import './Community.css';
import CommunityImage from '../Assets/CommunityImage.png';

const Community = () => {
  return (
    <section className="community-section">
      {/* Header */}
      <header className="community-header">
        <h2>BE A PART OF BETTER HEALTH</h2>
        <h1>Join the community</h1>
      </header>

      {/* Message */}
      <p className="community-message">
        Don’t let health uncertainties hold you back. Embrace a more informed, empowered approach 
        to your health with Zahara AI. Start your journey today and experience the difference that 
        personalized, AI-driven health support can make.
      </p>

      {/* Image */}
      <div className="community-image">
        <img src={CommunityImage} alt="Community illustration" />
      </div>

      {/* Call to Action Button */}
      <button className="community-cta">Sign up for free!</button>
    </section>
  );
};

export default Community;