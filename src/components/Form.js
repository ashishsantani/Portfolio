import React, { useState, useRef } from 'react';
import "./Formstyles.css";
import emailjs from "@emailjs/browser";
const Form = () => {


  const ref = useRef()
  const [success, setSuccess] = useState(null);
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [subject, setSubject] = useState(" ");
  const [message, setMessage] = useState(" ");
  const handleSubmit = (e) => {

    e.preventDefault();
    if (name === " " || email === " " || subject === " " || message === " ") {
      alert("First fill the Details and then click submit button.");
    } else {
      emailjs.sendForm('service_0dkf8yr', 'template_bado2ae', ref.current, '_CfMagTUi0y4JLtcy')
        .then((result) => {
          setSuccess(true);
        }, (error) => {
          setSuccess(false);
        });

      setName(" ");
      setEmail(" ");
      setSubject(" ");
      setMessage(" ");
    }
  }


  return (
    <div className="form">
      <form ref={ref} onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Subject</label>
        <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button className="btn submit" type="submit">Submit</button>
        {success ? alert("Your email has been successfully sent. We will comeback to you soon :)") : ""}
      </form>
    </div>
  )
}

export default Form;