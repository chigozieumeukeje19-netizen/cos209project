import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Email: info@babcockUniversity.com</p>
      <p>Phone: +2347025746899</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
