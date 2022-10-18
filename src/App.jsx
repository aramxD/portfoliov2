import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import "./App.css";
import DevTo from "./sections/DevTo";

function App() {
  return (
    <>
      <HashRouter>
        <Hero />
        <Navbar />
        <AboutMe />
        <Skills />
        <Projects />
        <DevTo/>
        <Contact />

        {/* <Routes>
          <Route path="*" element={<p>Not Found.. Check your url</p>} />
        </Routes> */}

        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
