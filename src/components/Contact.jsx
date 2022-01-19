import React from "react";
import "./styles/Contact.css";
import { AiOutlineContacts } from "react-icons/ai";


const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-header">
        <AiOutlineContacts className="header-icon" />
        <h1>להזמנות ויצירת קשר</h1>
      </div>
      <form className="contact-form">
        <input
          type="text"
          placeholder="שם מלא*"
          className="form-control"
          aria-label="Name"
          dir="rtl"
        />
        <input
          type="text"
          placeholder="מס' טלפון*"
          className="form-control"
          aria-label="Phone Number"
          dir="rtl"
        />
        <input
          type="text"
          aria-label="Message"
          placeholder="תוכן פניה*"
          className="form-control form-message"
          dir="rtl"
          required
        />
        <button type="submit" className="contact-btn  form-control">
          שלח
        </button>
      </form>
    </div>
  );
};

export default Contact;
