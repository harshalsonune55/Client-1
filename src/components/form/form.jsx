import React from 'react';
import './form.css';

const Form = () => {
  return (
    <section className="contact-section">
      <h4 className="subtitle">GET IN TOUCH</h4>
      <h1 className="title">Contact For Any <br />Queries</h1>
      <p className="desc">
        The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP
        in a few minutes. Just copy and paste the files, add a little code and you're done.{' '}
        <a href="#" className="highlight">Download Now.</a>
      </p>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <input type="text" placeholder="Subject" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <a href="/" className="scroll-top">↑</a>
    </section>
  );
};

export default Form;
