import React, { useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
import './Contact.css'

function Contact() {
  const notyf = new Notyf({ duration: 5000, position: { x: 'right', y: 'top' } });
  const [nameSend, setNameSend] = useState('')
  const [emailSend, setEmailSend] = useState('')
  const [messageSend, setMessageSend] = useState('')

  const contactSend = async (e) => {
    e.preventDefault();

    if (
      nameSend.trim() !== "" &&
      emailSend.trim() !== "" &&
      messageSend.trim() !== ""
    ) {
      let now = new Date();
      let timeString = now.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      let message = `📩 New User Request

A visitor has submitted a message through the website.

👤 Name: ${nameSend.trim()}
📞 Contact: ${emailSend.trim()}
📝 Message:
${messageSend.trim()}

⏱️ Sent at: ${timeString}`;

      try {
        let res = await fetch(
          `https://api.telegram.org/bot8297699918:AAHx27yPCHXCqFG1VufUDuzpCkyB0mPZux0/sendMessage`,
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              chat_id: 6933431339,
              text: message,
            }),
          }
        );
        console.log(res);
        notyf.success("Thank you for your message, we will contact you soon!");
      } catch (error) {
        console.log("error: " + error);
        notyf.error("An error occurred, please try again later.");
      }

      setNameSend("");
      setEmailSend("");
      setMessageSend("");
    } else {
      notyf.error("Please fill in all fields!")
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We will be happy to hear from you! Send us a message and we'll get back to you as soon as possible.</p>
      </div>
      <div className="contact-container">
        <form onSubmit={contactSend} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={nameSend}
            onChange={(e) => setNameSend(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={emailSend}
            onChange={(e) => setEmailSend(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={messageSend}
            onChange={(e) => setMessageSend(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      </div>
    </div>
  )
}

export default Contact