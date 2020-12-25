import React from "react";
import { Link } from "react-router-dom";
import img from "./FireSwitch_logo.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <Link to="/" className="navbar-brand">
          <img src={img} class=" " width="50%" alt="FireSwitch_logo" />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="basicExampleNav">
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item active show">
              <Link to="/" class="nav-link">
                HOME
              </Link>
            </li>

            <li class="nav-item active show">
              <Link to="/academy" class="nav-link">
                ACADEMY
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/product" class="nav-link">
                PRODUCTS
              </Link>
            </li>

            <li class="nav-item ">
              <Link to="/portfolio" class="nav-link">
                OUR PORTFOLIO
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/contact" class="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>

          <button type="button" class="btn">
            Ask Question ?
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
