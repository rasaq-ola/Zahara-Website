import React, { useState } from "react";
import "./CSS/WaitList.css";
import MedL from "../Components/Assets/MedL.png";
import WaitListpic from "../Components/Assets/WaitListpic.png";
import { FaArrowLeft } from "react-icons/fa"; // Import arrow icon from react-icons

const WaitList = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted successfully:", formData);
    alert("Successfully joined the waitlist!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="waitlist-container">
      {/* Left Section - Image */}
      <div className="waitlist-image">
        <img src={WaitListpic} alt="Microscope" />
      </div>

      {/* Right Section - Content */}
      <div className="waitlist-content">
        {/* Back Arrow */}
        <div className="back-arrow" onClick={() => window.history.back()}>
          <FaArrowLeft />
        </div>

        {/* Logo */}
        <img src={MedL} alt="Logo" className="waitlist-logo" />

        {/* Text Section */}
        <div className="JH">
          <h1>Join Zahara Health Ltd waitlist!</h1>
          <p>
            Don't miss out. Sign up now for early access, exclusive updates, and a
            first look at what Zahara Health has to offer.
          </p>
        </div>

        {/* Waitlist Form */}
        <form className="waitlist-form" onSubmit={handleSubmit}>
          <label>Waitlist form ✍️</label>
          <h2 className="Name">Name <span>*</span></h2>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <h2 className="Mail">Email address <span>*</span></h2>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <button type="submit">Join waitlist</button>
        </form>
      </div>
    </div>
  );
};

export default WaitList;
