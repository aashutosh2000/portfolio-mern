import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";


function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar
       darkMode={darkMode}
       setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default Home;












