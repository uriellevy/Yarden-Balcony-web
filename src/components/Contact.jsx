import React from "react";
import "./styles/Contact.css";
import { AiOutlineContacts } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = ({ modalSubmit, setModalSubmit, isLoading, setIsLoading }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n1v58o9",
        "template_aitd6fc",
        e.target,
        "user_crcSLVsR3W2BhTJ0IJTYF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setModalSubmit(true);
    // console.log(modalSubmit);
    setIsLoading(true);
    // console.log(isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // console.log(isLoading);
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-header">
        <AiOutlineContacts className="header-icon" />
        <h1>להזמנות ויצירת קשר</h1>
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          className="form-control"
          name="name"
          type="text"
          id="name"
          aria-label="Name"
          placeholder="שם מלא *"
          required
          dir="rtl"
        />
        <input
          type="text"
          placeholder="מס' טלפון*"
          required
          className="form-control"
          aria-label="Phone Number"
          name="phone"
          dir="rtl"
          id="phone"
        />
        <input
          type="text"
          aria-label="Message"
          placeholder="תוכן פניה*"
          required
          className="form-control form-message"
          name="message"
          dir="rtl"
          id="message"
        />
        <button type="submit" className="contact-btn  form-control">
          שלח
        </button>
      </form>
    </div>
  );
};

export default Contact;
