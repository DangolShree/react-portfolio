import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex navigation">
        <div className="flex"></div>

        <h1>Prem</h1>
        <div className="line">WEB DEVELOPER</div>

        <div className="menu">
          <ul className="flex">
            <li>
              {" "}
              <a href="#home">Home</a>
            </li>
            <li>
              {" "}
              <a href="#skills">Skills</a>
            </li>
            <li>
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li>
              {" "}
              <a href="#about">About</a>
            </li>
            <li>
              {" "}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>Navbar</div>
      </nav>
    </header>
  );
};
