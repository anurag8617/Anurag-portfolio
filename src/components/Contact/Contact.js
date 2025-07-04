import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="form-input" required />
        <input type="email" placeholder="Your Email" className="form-input" required />
        <textarea placeholder="Your Message" className="form-textarea" required></textarea>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;




