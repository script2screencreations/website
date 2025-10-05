import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import Nav from "../nav/Nav";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_cwxyuqg",
          "template_drdpoq8",
          form.current,
          "YmBYPa0R63zL3vI9x"
        )
        .then(
          () => {
            setShowPopup(true);
            form.current?.reset();

            setTimeout(() => {
              setShowPopup(false);
              navigate("/");
            }, 2000);
          },
          (error) => {
            console.error("Failed to send message:", error.text);
            alert("Failed to send message. Please try again later.");
          }
        );
    }
  };

  return (
    <>
      <Nav />
      <div className="Avn">
        <img src="./src/assets/img/pic.jpg" alt="Display image" />
      </div>
      <div className="contact">
        <h1>Contact Us</h1>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            required
          />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Description"
            required
          ></textarea>
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <button type="submit">Send</button>
        </form>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-message">Message sent successfully!</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
