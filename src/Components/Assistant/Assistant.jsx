import React from 'react'
import './Assistant.css'
import Frame2 from '../Assets/Frame2.png'

const Assistant = () => {
  return (
<section className="assistant-section">
  <div className="assistant-header">
    <h3>YOUR HEALTH, SIMPLIFIED WITH AI</h3>
    <h2>Your Personal Health Assistant</h2>
  </div>
  <div className="assistant-image">
    <img src={Frame2} alt="Assistant" />
  </div>
  <div className="assistant-description">
    <p>
    Feeling overwhelmed by conflicting health information or unsure if your symptoms are serious? Zahara AI is here to help. Think of us as your dedicated health companion, always available to offer clarity and support. Whether you're dealing with a minor issue or something more significant, Zahara AI is your go-to resource for understanding and managing your health.
    </p>
  </div>
  <div className="assistant-cta">
    <button className="assistant-button">Sign up for free</button>
  </div>
</section>

  )
}

export default Assistant