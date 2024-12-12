import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-page">
        <div className="contact-title">Contact Us</div>
        <div className="contact-info">Need help? We're here for you.</div>
        <div className="contact-card">
          <h3>Reach us by Phone</h3>
          <p>123 456 1140</p>
          <br />
          <h3>Reach us by Email</h3>
          <p>name@recipi.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
