import React, { useState, useEffect } from "react";
import "./CSS/Signup.css";

const testimonials = [
  { text: "Zahara AI is a lifesaver. It gives health advice that fits my lifestyle. It's my go-to for everything from tracking symptoms to getting general health advice.", author: "Jessica" },
  { text: "Zahara AI has transformed how I approach my health. It's so easy to use and incredibly helpful!", author: "Michael" },
  { text: "I can't recommend Zahara AI enough. It's like having a health assistant in your pocket!", author: "Sophia" },
];

const Signup = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="signup-container">
      <div className="welcome-section">
        <h1>Welcome to Zahara AI</h1>
        <p>Glad you're here! Let's make health simple and personal.</p>
        <div className="testimonial-box">
          <p className="testimonial-text">"{testimonials[currentTestimonialIndex].text}"</p>
          <span className="testimonial-author">- {testimonials[currentTestimonialIndex].author}</span>
        </div>
      </div>
      <div className="form-section">
        <div className="login-link">
          <span>Have an account?</span> <a href="/login">Login here</a>
        </div>
        <h2>Create an account 🖋️</h2>
        <p>Find your best self – Sign up with Zahara AI</p>
        <form>
          <label>
            Username <span>*</span>
            <input type="text" placeholder="Enter your preferred username" required />
          </label>
          <label>
            Email address <span>*</span>
            <input type="email" placeholder="Enter your email address" required />
          </label>
          <label>
            Password <span>*</span>
            <input type="password" placeholder="Enter your password" required />
          </label>
          <label className="terms-checkbox">
            <input type="checkbox" required />
            I agreed with the <a href="/terms">Terms and conditions</a> of Zahara AI
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
