import React from "react";
import './Branding.css'
import {Link} from 'react-router-dom'
import img from "./img/branding.jpg";

const Branding = () => {
  return (
    <>
      <section class="branding mt-5">
        <div class="">
          <div class="row">
          <div class="col-md-7">
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
                      <Link to="/enrol" >  <button class="btn text-center mt-4">REGISTER NOW</button> </Link>
                    </ul>
                  </div> 

                </div>

              </div>
            </div>

            <div class="col-md-5 text-center">
              <div class=" ">
                <div class="">
                  <h3 style={{ fontWeight: "600" }}> Branding and Design </h3>
                </div>
                <div class="animated fadeInRight">
                  <img src={img} alt="Branding" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Branding;
