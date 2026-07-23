import "../styles/footer.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">

      <h2>Aashutosh Portfolio</h2>

      <p>
        MERN Stack Developer | React | Node.js | MongoDB
      </p>

      <div className="footer-links">
        <a
          href="mailto:aashutoshsoni2019@gmail.com"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
        >
         <FaEnvelope/>
        </a>
        <a
          href="https://github.com/aashutosh2000"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
        >
         <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/aashutosh-soni" // TODO: Replace with your actual LinkedIn profile URL
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
        >
            <FaLinkedin />
        </a>
      </div>

      {/* Dynamically update the copyright year for better maintenance */}
      <p className="copyright">© {new Date().getFullYear()} Aashutosh. All Rights Reserved.</p>

    </footer>
  );
}

export default Footer;