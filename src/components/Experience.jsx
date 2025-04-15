// src/components/Experience.jsx
import React from "react";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    role: "Hackathon Participant",
    company: "IEEE 72-Hour Hackathon",
    duration: "2023-september",
    description:
      "Developed a resume screening tool with a team. Worked on frontend and backend integration under a tight deadline."
  },
  {
    role: "Ideathon Finalist",
    company: "E-Cell Ideathon",
    duration: "2024",
    description:
      "Pitched a startup idea for an online plant selling platform. Contributed in ideation, research, and presentation."
  },
  {
    role: "Publicity & Marketing Volunteer",
    company: "College Fest",
    duration: "2025",
    description:
      "Helped in promoting the fest through social media and offline campaigns, enhancing communication and outreach."
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <FaBriefcase className="exp-icon" />
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
