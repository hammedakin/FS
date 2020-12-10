import React from "react";
import img1 from "./img/star.png";

const Services = () => {
  return (
    <>
      <section class="services">
        <div class="container text-center ">
          <div class="mt-5 wow animated fadeInDown">
            <h3>We Provide the following Services:</h3>

            {/* <p class="mt-2 ">
              {" "}
        The application of tech tools, and digital technology to business and processes yields far more better than results. 
</p> */}
          </div>

          <div class="mt-5">
            <div class="row row-cols-1 row-cols-md-3">
              <div class="col mb-4 ">
                <div class="card hoverable h-100 wow animated fadeInLeft ">
                  <div class="card-body">
                    <img
                      src={img1}
                      width="40rem"
                      alt="fireswitch"
                      class="mb-4 mt-2"
                    />
                    <h4 class="card-subtitle"> Web Development </h4>
                    <p class="card-text">
                    We create websites that represent the hand & communicate Brand values effectively                    </p>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card hoverable h-100 wow animated fadeInUp">
                  <div class="card-body">
                    <img
                      src={img1}
                      width="40rem"
                      alt="fireswitch"
                      class="mb-4 mt-2"
                    />
                    <h4 class="card-subtitle"> Branding & Design</h4>
                    <p class="card-text">
                    With a proper understanding of design & marketing, we help put your brand a beautiful light.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card hoverable h-100 wow animated fadeInRight">
                  <div class="card-body">
                    <img
                      src={img1}
                      width="40rem"
                      alt="fireswitch"
                      class="mb-4 mt-2"
                    />
                    <h4 class="card-subtitle"> Digital Marketing</h4>
                    <p class="card-text">
                    We know just how to help You get customers using email, content marketing, SEO and Social media.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="services"></div>
    </>
  );
};

export default Services;
