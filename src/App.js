import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode" className="dark-mode-toggle">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navbar />
        <Routes>
          <Route path="/" element={<hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills" element={<Hero />} />
          <Route path="/skills" element={<Info />} />
          <Route path="/skills" element={<Works />} />
          <Route path="/skills" element={<About />} />
          <Route path="/skills" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
