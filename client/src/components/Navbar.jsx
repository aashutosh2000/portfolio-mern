// import { useState, useEffect } from "react";
// import "../styles/navbar.css";

// function Navbar({ darkMode, setDarkMode }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active, setActive] = useState("home");

//   // Active section on scroll
//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const handleScroll = () => {
//       let current = "home";

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100;

//         if (window.scrollY >= sectionTop) {
//           current = section.getAttribute("id");
//         }
//       });

//       setActive(current);
//     };

//     window.addEventListener("scroll", handleScroll);

//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Close menu after clicking a link
//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <a href="#home" className="logo">
//         Ashu Portfolio
//       </a>

//       {/* Right Side */}
//       <div className="nav-right">
//         {/* Menu Button */}
//         <button
//           className="menu-icon"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-expanded={menuOpen}
//           aria-controls="nav-links-menu"
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>

//         {/* Dark Mode Button */}
//         <button
//           className="theme-btn"
//           onClick={() => setDarkMode(!darkMode)}
//         >
//           {darkMode ? "☀️" : "🌙"}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <ul
//         id="nav-links-menu"
//         className={menuOpen ? "nav-links active" : "nav-links"}
//       >
//         <li>
//           <a
//             href="#home"
//             className={active === "home" ? "active-link" : ""}
//             onClick={closeMenu}
//           >
//             Home
//           </a>
//         </li>

//         <li>
//           <a
//             href="#about"
//             className={active === "about" ? "active-link" : ""}
//             onClick={closeMenu}
//           >
//             About
//           </a>
//         </li>

//         <li>
//           <a
//             href="#skills"
//             className={active === "skills" ? "active-link" : ""}
//             onClick={closeMenu}
//           >
//             Skills
//           </a>
//         </li>

//         <li>
//           <a
//             href="#projects"
//             className={active === "projects" ? "active-link" : ""}
//             onClick={closeMenu}
//           >
//             Projects
//           </a>
//         </li>

//         <li>
//           <a
//             href="#contact"
//             className={active === "contact" ? "active-link" : ""}
//             onClick={closeMenu}
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import { useState, useEffect } from "react";
import "../styles/navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect Active Section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close Mobile Menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#home" className="logo">
        Ashu Portfolio
      </a>

      {/* Right Side Buttons */}
      <div className="nav-right">
        {/* Mobile Menu Button */}
        <button
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="nav-links-menu"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Dark Mode Button */}
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        id="nav-links-menu"
        className={menuOpen ? "nav-links active" : "nav-links"}
      >
        <li>
          <a
            href="#home"
            className={active === "home" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active-link" : ""}
            onClick={closeMenu}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;