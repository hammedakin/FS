import React from "react";
import img from "./web dev.jpg";

const Portfolio = () => {
  return (
    <>
      <section class="portfolio">
        <div class="container-fluid ">
          <div class="row mx-auto row-cols-1 row-cols-md-2 g-4">
            <div class="col-lg-6 ">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row">
                  <div class="col-6 col1">
                    <div
                      class="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                     

                      <a class="" href="https://toluade.art" target="_blank">
                      <img src={img} alt="" class="img-fluid" />
                        <div
                          class="mask"
                          style={{
                            backgroundColor: + "rgba(251, 251, 251, 0.15",
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div class="col-6 col2">
                    <div class="card-body">
                      <h5 class="card-title"> ToluAde Photography</h5>
                      <p class="card-text">
                        Here you can use rows and columns to organize your
                        footer content. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                      </p>
                      <a href="" target="_blank">
                      <p
                        class="card-text text-right mt-3"
                      >
                        <small class="text-muted"> Learn More</small> 
                      </p> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row">
                  <div class="col-6 col1">
                    <img src={img} alt="" class="img-fluid" />
                  </div>
                  <div class="col-6 col2">
                    <div class="card-body">
                      <h5 class="card-title"> ToluAde Photography</h5>
                      <p class="card-text">
                        Here you can use rows and columns to organize your
                        footer content. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"> Learn More </small>
                      </p>
                    </div>
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

export default Portfolio;
