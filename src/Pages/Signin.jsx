import React, { useState, useEffect } from "react";
import "./CSS/Signin.css";
import onboarding1 from '../Components/Assets/onboarding1.png';
import onboarding2 from '../Components/Assets/onboarding1.png';
import onboarding3 from '../Components/Assets/onboarding1.png';
import onboarding4 from '../Components/Assets/onboarding1.png';
import onboarding5 from '../Components/Assets/onboarding1.png';

const SignIn = () => {
    const slides = [
      {
        image: onboarding1,
        title: "Welcome back to Zahara AI",
        description: "Glad you're here! Let's make health simple and personal.",
      },
      {
        image: onboarding2,
        title: "Your community",
        description: "Connect and share with others who get it. You're not alone.",
      },
      {
        image: onboarding3,
        title: "Quick chat support",
        description: "Got a question? Our chatbot's always open for you.",
      },
      {
        image: onboarding4,
        title: "Nearest health spots",
        description: "Find nearby health services to reach whenever you need.",
      },
      {
        image: onboarding5,
        title: "Let's go!",
        description: "You're all set! Explore everything Zahara AI has to offer.",
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [slides.length]);
  
    return (
      <div className="signin-container">
        <div className="signin-left">
          <div className="opt-display">
            <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
          </div>
          <div className="opt-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? "active-dot" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="signin-right">
          <h2>Login to your account 👋</h2>
          <p>Find your best self – Login to continue</p>
          <form className="signin-form">
            <label htmlFor="email">Email Address/Username</label>
            <input type="email" id="email" placeholder="Enter your email address" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
            <div className="signin-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/">Forgot Password?</a>
            </div>
            <button type="submit" className="signin-button">Login</button>
          </form>
          <div className="signin-footer">
            <p>
              I don't have an account? <a href="/">Sign up here</a>
            </p>
          </div>
        </div>
      </div>
    );
  };

export default SignIn;