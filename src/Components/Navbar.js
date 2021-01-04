import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom'
import AskAQuestion from '../Components/Home/AskAQuestion'
import img from "./FireSwitch_logo.png";

const Navbar = () => {

  // For the Ask A Question 
  const [showaaq, setShowAAQ] = useState(false);
  const handleCloseAAQ = () => setShowAAQ(false);
  const handleShowAAQ = () => setShowAAQ(true);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  }

  //   function myFunction(x) {
  //   x.classList.toggle("change");
  // }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
        <Link to="/home" className="navbar-brand">
          <img src={img} width="50%" alt="FireSwitch_logo" loading="lazy" />
        </Link>

        <a
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon toggler">
            <box-icon class="box-icon" size='2rem' color=" #ff9a41" name="menu" type="logo"></box-icon>

            {/* <div class="" onclick="myFunction(this)">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div> */}

          </span>
        </a>

        <div class="collapse navbar-collapse" id="basicExampleNav">
          <ul class="navbar-nav ml-auto text-center">


            <li class="nav-item">
              <NavLink tag={Link} activeClassName="active1" to="/home" >
                HOME
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink tag={Link} activeClassName="active1" to="/academy">
                ACADEMY
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink tag={Link} activeClassName="active1" to="/product">
                PRODUCTS
              </NavLink>
            </li>

            <li class="nav-item ">
              <NavLink tag={Link} activeClassName="active1" to="/portfolio">
                PORTFOLIO
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink tag={Link} activeClassName="active1" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
          <ul class="navbar-nav text-center">
            <li>
              <button type="button" class="btn"
                onClick={handleShowAAQ}
                class="btn px-3 mx-auto shadow"
              >
                Ask Question ?
          </button>
            </li>
          </ul>

          <AskAQuestion show={showaaq} onHide={handleCloseAAQ} animation={false} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
