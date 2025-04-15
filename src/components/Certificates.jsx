// src/components/Certificates.jsx
import React from "react";
import "./Certificates.css";
import { FaCertificate } from "react-icons/fa";

const certificatesData = [
  {
    title: "AWS solution architecture",
    issuer: "Forage",
    date: "2025"
  },
  {
    title: "Software Engineering",
    issuer: "Electronic atrs",
    date: "2025"
  },
 
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-list">
        {certificatesData.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <FaCertificate className="cert-icon" />
            <h3>{cert.title}</h3>
            <h4>{cert.issuer}</h4>
            <p className="cert-date">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
