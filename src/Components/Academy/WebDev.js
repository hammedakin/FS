import React from "react";
import "./WebDev.css";
import img from "./img/Web_Dev.jpg";
import { Link } from "react-router-dom";

const WebDev = () => {
  return (
    <>
      <section class="webdev">
        <div class="">
          <div class="row">
            <div class="col-md-4 text-center h-100">
              <div class=" ">
                <div class="text-center">
                  <h3 style={{ fontWeight: "600", color: "green", textAlign: "center!important" }}> Web Development</h3>
                </div>

                <div class="animated fadeInLeft">
                  <img alt="Web Development" src={img} />
                </div>
              </div>
            </div>

            <div class="col-md-7 h-100 ml-auto" style={{}}>
              <div class=" row-text">
                <div class="text-justify">
                  <div class="">
                    <h6>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </h6>
                  </div>

                  <div class="">
                    <ul>
                      <li> HTML</li>
                      <li> CSS</li>
                      <li> BOOTSTRAP</li>
                      <li> JAVASCRIPT</li>
                      <li> REACT / PHP</li>
                      <li> PRODUCT DEVELOPMENT</li>
                      <Link to="/enrol">
                        {" "}
                        <button class="btn text-center mt-4">
                          REGISTER NOW
                        </button>{" "}
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDev;
