// src/components/About.jsx
import React from 'react';
import './About.css';
import profile from '../assets/profile-picture.jpg'; // put your image in this folder

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={profile} alt="Profile" className="profile-pic" />
      <p>
      Enthusiastic second-year Computer Science student with a strong passion for learning and problem-solving. Eager
     to explore software development, algorithms, and emerging technologies. Continuously improving programming
    skills through self-learning and academic projects. Highly motivated to apply knowledge in real-world applications
    and collaborate on innovative solutions. Seeking opportunities to grow and gain hands-on experience in the field.
      </p>
      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download="resume.pdf"
        className="download-button"
      >
        Download Resume
      </a>


      <h3>🎓 Education</h3>
      <p>Bachelor of Technology in Computer Science</p>
      <p>Vellore Institute of Technology, 2023 - 2027</p>
    </section>
  );
};

export default About;
