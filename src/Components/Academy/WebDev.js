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
                <div class="">
                  <h3 style={{ fontWeight: "600", textAlign: "center!important" }}> Web Development</h3>
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
                     Learning to code is as simple as ABC. With the right environment and mentors you would soon be building great websites.
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
                      <Link to="/academy/enrol">
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
