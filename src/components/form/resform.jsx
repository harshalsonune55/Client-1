import React from 'react';
import './form.css';

const ResForm = () => {
  return (
    <section className="contact-section">
      <h4 className="subtitle">GET IN TOUCH</h4>
      <h1 className="title">Register YourSelf</h1>


      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <input type="text" placeholder='Phone number' required />
        <input type="password" placeholder='passowrd' required />     
        <input type="password" placeholder='confirm password' required />
        <button type="submit">Register</button>
      </form>

      <a href="/" className="scroll-top">↑</a>
    </section>
  );
};

export default ResForm;
