import React, { Component } from "react";
import About from "../About/About";
import Home from "../Home/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";

export class Navbar extends Component {
  render() {
    return (
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold">
              Shaggy Belco Sambo{" "}
              <sub className="ml-5 font-normal">FullStack developer</sub>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* desktop */}
                <Router>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/resume">Resume</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>

                  <Routes>
                    <Route exact path="/" component={<Home />}></Route>
                    <Route exact path="/about" component={<About />}></Route>
                    <Route exact path="/resume" component={<Resume />}></Route>
                    <Route exact path="/portfolio" component={<Portfolio />}></Route>
                    <Route exact path="/contact" component={<Contact />}></Route>
                  </Routes>
                </Router>
              </ul>
            </div>
          </div>
          {/* Content */}
          <div>
            <Home></Home>
          </div>
          <div>
            <About></About>
          </div>
          <div>
            <Resume></Resume>
          </div>
          <div>
            <Portfolio></Portfolio>
          </div>
          <div>
            <Contact></Contact>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* Mobile */}
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Resume</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
