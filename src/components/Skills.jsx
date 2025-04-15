// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

// Importing icons from react-icons
import { FaJava, FaPython, FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiC, SiCplusplus, SiJavascript, SiNodedotjs } from "react-icons/si";

const skillsData = [
  { name: "C", icon: <SiC color="#00599C" /> },
  { name: "C++", icon: <SiCplusplus color="#004482" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#68A063" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> }
];

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
