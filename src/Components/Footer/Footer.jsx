import React from "react";
import "./Footer.css";
import FooterImage from "../Assets/FooterImage.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={FooterImage} alt="Zahara Health Logo" className="footer-logo" />
          <p className="footer-text">
            We’re dedicated to making health management simple and personalized with Zahara AI. 
            Learn more about our mission and how we’re transforming healthcare.
          </p>
          <a href="#learnmore" className="learn-more">Learn more...</a>

          <div className="social-media">
            <span>Follow us</span>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h4>ABOUT US</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#team">Our team</a></li>
          </ul>
          <h4>CONTACT US</h4>
          <p><a href="tel:+2349064601069" className="phone">+2349064601069</a></p>
          <p><a href="mailto:info@zaharahhealthlimited.com" className="email">info@zaharahhealthlimited.com</a></p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>STAY CONNECTED</h4>
          <p className="subscribe">Subscribe to our newsletter<br />
            Get the latest health tips, updates, and exclusive offers straight to your inbox.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Enter email address" />
          </div>
          <button className="Subscribe-cta">Subscribe</button>
          <p className="policy-text">
            By subscribing you agree to our <a href="#privacy">Privacy Policy</a> and provide consent to receive updates from our company.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <h3>Zahara Health</h3>
        <p>&copy; 2023 Zahara Health. All rights reserved.</p>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms and conditions</a></li>
          <li><a href="#cookies">Cookies Settings</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
