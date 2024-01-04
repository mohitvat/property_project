"use client";
import "./contactUs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";

const ContactUs = () => {
  const [error, setError] = useState("");
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_4ptrhmc", "template_qm8z9x1", formRef.current, "VCU4JtVliF3aiOvKw")
      .then(
        (result) => {
          console.log(result.text);
          setError("Email sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setError("Error sending email");
        }
      );
  };
  return (
    <div>
      <div className="contact__wrapper">
        <Navbar />
        {/* <div className="contact__content">
          <p>DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
        </div> */}

        <div className="social__logos">
          <a href="https://www.instagram.com/gspropertiesdevelopments/?hl=en">
            <img
              className="social__logo"
              alt="Ig white"
              src="https://c.animaapp.com/q5aj6oWM/img/ig-white@2x.png"
            />
          </a>
          <a href="https://www.tiktok.com/@gspropertiesdevelopments?_t=8i0xQIpJsjB&_r=1">
            <img
              className="social__logo"
              alt="Tiktokk white"
              src="/tiktok.png"
            />
          </a>
        </div>
      </div>

      <div className="contact__text">
        <div className="contact__message">
          <h4>
            Should you require further assistance or wish to enquire about any
            future properties, please contact us via the details below.
          </h4>
          <br />
          <br />
          <div>
            <h4>Email:</h4>
            <h4>enquiries@greystoneproperties.co</h4>
          </div>
          <br />

          <div>
            <h4>REGISTERED ADDRESS:</h4>
            <h2>
              6884 BEVERBERG STREET, COPPERLEAF AND COUNTRY ESTATE, Johannesburg
              522 PEACH TREE EXT 1
            </h2>
          </div>
        </div>
        <div className="contact__form">
          <div className="map">
            <iframe
              className="maps"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.907826319588!2d-0.12615912391896955!3d51.51490701015554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x22220c3f07824033!2sShop%2071%2C%20ALG%20ID%20Cards%20t%2Fa%20The%20Lanyard%2C%2075%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sin!4v1700748897235!5m2!1sen!2sin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14359.199154011252!2d28.026874975207882!3d-25.876066099134366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957bbef338f02b%3A0x2fc8f57b67916c70!2sCopperleaf%20Golf%20and%20Country%20Estate%2C%20Centurion%2C%200157%2C%20South%20Africa!5e0!3m2!1sen!2sin!4v1702155683704!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact__details">
            <form onSubmit={sendEmail} ref={formRef}>
              <div className="input__fields">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div className="input__fields">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <div className="input__fields">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                />
              </div>

              <button className="submit__btn">Submit</button>
             
              
            </form>
            <div className="input__fields">
              {error === "Error sending email" ? (
                <span className="error">{error}</span>
              ) : (
                <span className="success">{error}</span>
              )}
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
