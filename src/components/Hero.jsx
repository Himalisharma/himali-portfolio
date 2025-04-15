import React from "react";
import "./Hero.css";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import avatar from "../assets/avatar.jpg"; 

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-avatar">
            <img src={avatar} alt="My Avatar" />
          </div>
          <div className="hero-text">
            <h1>Hello, I’m <span className="highlight">Himali Sharma</span> </h1>
            <p className="subtitle">computer scince student at vit vellore</p>

            <div className="contact-block">
              <p><FaLinkedin /> <a href="https://www.linkedin.com/in/himali-sharma-b0a03a316" target="_blank">my-linkedin</a></p>
              <p><FaEnvelope /> himaliisharma@gmail.com</p>
              <p><FaPhone /> +91-8272843293</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-divider"></div>
    </section>
  );
};

export default Hero;
