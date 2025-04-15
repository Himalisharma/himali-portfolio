import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ubljizu", 
      "template_u1xv1v9", 
      form.current, 
      "vPi_cF9ixNV2LR9NF"
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      () => {
        alert("Failed to send message. Try again!");
      }
    );
  };

  return (
    <section id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <p className="contact-description">I'd love to hear from you. Fill out the form and I'll get back to you soon!</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
