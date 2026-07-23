import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";

function App() {
  // Theme State
  const [darkMode, setDarkMode] = useState(false);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Dark Mode Effect
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Home
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>
  );
}

export default App;