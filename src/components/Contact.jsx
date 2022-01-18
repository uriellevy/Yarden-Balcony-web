import React from "react";
import "./styles/Contact.css";
import { AiOutlineContacts } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <AiOutlineContacts className="header-icon" />
        <h1>להזמנות ויצירת קשר</h1>
      </div>
      <div className="contact-form">
        <input
          type="text"
          placeholder="שם מלא*"
          className="form-control"
          aria-label="Name"
        />
        <input
          type="text"
          placeholder="מס' טלפון*"
          className="form-control"
          aria-label="Phone Number"
        />
        <input
          type="text"
          aria-label="Message"
          placeholder="תוכן פניה*"
          className="form-control form-message"
          required
        />
      </div>
    </div>
  );
};

export default Contact;
