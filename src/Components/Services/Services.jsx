import React from 'react'
import './Services.css'
import Frame from '../Assets/Frame.png'
import Servicesicon1 from '../Assets/Servicesicon1.png'
import Servicesicon2 from '../Assets/Servicesicon2.png'
import Servicesicon3 from '../Assets/Servicesicon3.png'
import arrowpic from '../Assets/arrowpic.png'

const Services = () => {
  return (
    <section className="services-area">
  <div className="services-content-wrapper">
    <div className="services-text-content">
      <h1>SMART HEALTH, SIMPLIFIED</h1>
      <h2>Why MedAI?</h2>
      <p>
      Get clear, personal health advice and make better choices with ease. <br /> Zahara AI helps you understand your symptoms and take control of your <br /> wellbeing, making health management simple and straightforward.
      </p>
      <img src={arrowpic} alt="Service Illustration" className="services-small-image" />
    </div>
    <div className="services-image-content">
      <img src={Frame} alt="Services" />
    </div>
  </div>

  {/* Services Items */}
  <div className="services-list">
    <div className="service-box">
      <img src={Servicesicon1} alt="Health Monitoring Icon" className="service-icon" />
      <h3 className="service-heading">Personalized Health Insights</h3>
      <p className="service-description">
      Zahara AI uses advanced AI to analyze your symptoms and health concerns, provides personalized advice specifically to you. No more generic recommendations just insights that matter to your unique situation.
      </p>
    </div>
    <div className="service-box">
      <img src={Servicesicon2} alt="Personalized Plans Icon" className="service-icon" />
      <h3 className="service-heading">Smart Decision-Making</h3>
      <p className="service-description">
      With Zahara AI, you can make informed decisions about your health with confidence. Our platform helps you understand whether your symptoms are minor or require more attention, guiding you to the right course of action.
      </p>
    </div>
    <div className="service-box">
      <img src={Servicesicon3} alt="24/7 Support Icon" className="service-icon" />
      <h3 className="service-heading">Effortless Health Management</h3>
      <p className="service-description">
      Zahara AI simplifies the complex world of healthcare. Our user-friendly design and smart features ensure that managing your health is straightforward and stress-free.
      </p>
    </div>
  </div>
</section>

  )
}

export default Services;