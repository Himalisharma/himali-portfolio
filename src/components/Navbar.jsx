// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css"; // Importing the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
