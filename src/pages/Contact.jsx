import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page-content">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Drop us a message below.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="hello@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
        </div>
        <button type="submit" className="btn-primary">
          {submitted ? 'Sent Successfully!' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
