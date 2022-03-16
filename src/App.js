import "./App.css";
import { Route, Routes } from "react-router-dom";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import aos from "aos";
import "../node_modules/aos/dist/aos.css";
import { useEffect } from "react"


function App() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">

      <Introduction />
      <AboutMe />
      <Experience />
      <Projects />

      <Routes>
        <Route path="/" />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
