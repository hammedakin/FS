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
                     There are businesses out there who are doing great work but no one knows about them. The point of this course is to show you how you can help them using the following
                    </h6>
                  </div>

                  <div class="py-3">
                    <ul>
                      <li> Graphic Design</li>
                      <li> Content Creation</li>
                      <li> Social Media Management</li>
                      <li> Ads Management</li>
                      <li> Copy Writing</li>
                   
                      <Link to="/academy/enrol" >  <button class="btn text-center mt-4">REGISTER NOW</button> </Link>
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
