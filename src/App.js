import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './App.css'; 
function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1org40e', 'template_4vjt97l', form.current, {
        publicKey: 'N6JtbQtT4_ptlDEH1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Name</label>
        <input type="text" name="user_name" className="input-field" />
        <label>Email</label>
        <input type="email" name="user_email" className="input-field" />
        <label>Phone number</label>
        <input type="text" name="user_number" className="input-field" />
        <label>Message</label>
        <textarea name="message" className="textarea-field" />
        <input type="submit" value="Send" className="submit-btn" />
      </form>
    </div>
  );
};

export default App;