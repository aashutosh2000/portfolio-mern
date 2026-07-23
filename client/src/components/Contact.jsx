import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "../styles/contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a72ll58", // Replace with your Service ID
        "template_pg1s9hm", // Replace with your Template ID
        form.current,
        "QzW8hzu5EgK09Oyae" // Replace with your Public Key
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully");
          form.current.reset(); // Clear form after sending
        },
        (error) => {
          console.log(error);
          alert("❌ Something Went Wrong");
        }
      );
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
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
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