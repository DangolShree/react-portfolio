import "./App.css";
import HeroSection from "./component/HeroSection";
import { Route, Routes } from "react-router-dom";
import { Skill } from "./component/Skill";
import { Infos } from "./component/Infos";
import { Nav } from "./component/Nav";
import { Projects } from "./component/Projects";
import { About } from "./component/About";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode" className="dark-mode-toggle">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Nav />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/" element={<Skill />} />
          <Route path="/" element={<Infos />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<About />} />
          {/* <Route path="/skills" element={<Skills />} />
          <Route path="/skills" element={<Hero />} />
          <Route path="/skills" element={<Info />} />
          <Route path="/skills" element={<Works />} />
          <Route path="/skills" element={<About />} />
          <Route path="/skills" element={<Contact />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
