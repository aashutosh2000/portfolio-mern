import axios from "axios";
import { useState } from "react";
import "../styles/contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const sendMessage = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/contact",
      formData
    );

    alert(res.data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};

  return (
    <section className="contact" id="contact" data-aos="fade-left">
      <h2>Contact Me</h2>

      <p>
        Feel free to contact me for freelance work, internships or any
        collaboration.
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            <FaEnvelope /> <span>Email: aashutoshsoni2019@gmail.com</span>
          </p>

          <p>
            <FaPhone /> <span>Phone: +91 9755628076</span>
          </p>

          <p>
            <FaMapMarkerAlt /> <span>Raipur, Chhattisgarh</span>
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={sendMessage} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
          {/* Social Icons Here */}
        </div>
      </div>
    </section>
  );
}

export default Contact;