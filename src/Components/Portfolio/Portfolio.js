import React from "react";
import img from "./img/toluade.png";
import img1 from "./img/eclipse.png";
import img2 from "./img/pepperedrice.png";
import img3 from "./img/cla.png";
import img4 from "./img/divine.png";

const Portfolio = () => {
  return (
    <>
      <section class="portfolio">
        <div class="container-fluid ">
          <div class="text-center mb-5">
            <h4> Here are some of our works</h4>
            <p>
              We have worked with a number of brands to build high quality
              responsive websites and exceptional user experience.
            </p>
          </div>

          {/* Portfolio Columns */}
          <div class="row mx-auto row-cols-1 row-cols-md-2 g-4">
            {/* ToluAde Art */}
            <div class="col-lg-6 col-md-12">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div
                  class="row tolu"
                  style={{
                    backgroundColor: + "#000"
                  }}
                >
                  <div class="col-md-6 col1">
                    <div
                      class="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <a class="" href="https://toluade.art" target="_blank">
                        <img src={img} alt="" class="img-fluid" />
                        <div class="mask"></div>
                      </a>
                    </div>
                  </div>

                  <div class="col-md-6 col2">
                    <div class="card-body">
                      <h5 class="card-title"> ToluAde Photography</h5>
                      <p class="card-text">
                        We developed a portfolio website to show case the work
                        of Toluade Photography, a document photographer.
                        <br />
                        It was built using HTML, CSS and BOOTSTRAP
                      </p>
                      <a href="https://toluade.art" target="_blank">
                        <p class="card-text text-right mt-3">
                          <small class="text-muted"> Learn More</small>{" "}
                          <box-icon
                            class="box-icon"
                            size="1.5rem"
                            color=" #323982"
                            name="link-alt"
                            type="solid"
                          ></box-icon>
                        </p>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ToluAde Art */}

            {/* Eclipse Delivery Services. */}
            <div class="col-lg-6 col-md-12">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row eclipse">
                  <div class="col-md-6 col1">
                    <div
                      class="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <a
                        class=""
                        href="https://eclipsedeliveryservices.com/"
                        target="_blank"
                      >
                        <img src={img1} alt="" class="img-fluid" />
                        <div
                          class="mask"
                          style={{
                            backgroundColor: +"rgba(251, 251, 251, 0.15",
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col2">
                    <div class="card-body">
                      <h5 class="card-title"> Eclipse Delivery Services</h5>
                      <p class="card-text">
                        Eclipse Delivery Services website was created to help
                        customers easily get a logistics business to pick up and
                        deliver goods by simply inputing the details of the
                        package on the website. It was built using REACTJS & PHP
                      </p>
                      <a
                        href="https://eclipsedeliveryservices.com/"
                        target="_blank"
                      >
                        <p class="card-text text-right mt-3">
                          <small class="text-muted"> Learn More</small>{" "}
                          <box-icon
                            class="box-icon"
                            size="1.5rem"
                            color=" #323982"
                            name="link-external"
                            type="solid"
                          ></box-icon>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eclipse Delivery Services. */}

            {/* Peppered Rice */}

            <div class="col-lg-6 col-md-12">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row rice">
                  <div class="col-md-6 col1">
                    <div
                      class="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <a
                        class=""
                        href="https://pepperedrice.ng/"
                        target="_blank"
                      >
                        <img src={img2} alt="" class="img-fluid" />
                        <div
                          class="mask"
                          style={{
                            backgroundColor: +"rgba(251, 251, 251, 0.15",
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col2">
                    <div class="card-body">
                      <h5 class="card-title"> Peppered Rice</h5>
                      <p class="card-text">
                        Peppered Rice was created to be a very simple website to
                        help customers order food and to learn more about the
                        food vendor. It was built using REACTJS
                      </p>
                      <a href="https://pepperedrice.ng/" target="_blank">
                        <p class="card-text text-right mt-3">
                          <small class="text-muted"> Learn More</small>
                          <box-icon
                            class="box-icon"
                            size="1.5rem"
                            color=" #323982"
                            name="link-alt"
                            type="solid"
                          ></box-icon>
                        </p>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Peppered Rice */}

            {/* CLA Logistics */}

            <div class="col-lg-6 col-md-12">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row cla">
                  <div class="col-md-6 col1">
                    <div
                      class="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <a
                        class=""
                        href="https://clalogisticsng.com/"
                        target="_blank"
                      >
                        <img src={img3} alt="" class="img-fluid" />
                        <div
                          class="mask"
                          style={{
                            backgroundColor: +"rgba(251, 251, 251, 0.15",
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col2">
                    <div class="card-body">
                      <h5 class="card-title"> CLA Logistics</h5>
                      <p class="card-text">
                        CLA logistics website is designed to help customers
                        easily get a logistics business to pick up and deliver
                        goods by simply chatting up the logistics manager. It
                        was built using HTML, CSS and BOOTSTRAP
                      </p>
                      <a href="https://clalogisticsng.com/" target="_blank">
                        <p class="card-text text-right mt-3">
                          <small class="text-muted"> Learn More</small>
                          <box-icon
                            class="box-icon"
                            size="1.5rem"
                            color=" #323982"
                            name="link-external"
                            type="solid"
                          ></box-icon>
                        </p>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CLA Logistics */}

            {/* Divine Dental Home */}

            <div class="col-lg-6 col-md-12">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row divine">
                  <div class="col-md-6 col1">
                    <div
                      class="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <a
                        class=""
                        href="https://divinedentalhome.com.ng/"
                        target="_blank"
                      >
                        <img src={img4} alt="" class="img-fluid" />
                        <div
                          class="mask"
                          style={{
                            backgroundColor: +"rgba(251, 251, 251, 0.15",
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col2">
                    <div class="card-body">
                      <h5 class="card-title"> Divine Dental Home</h5>
                      <p class="card-text">
                        Divine Dental Home website is designed to project the
                        services of a a dental clinic and providesa way to book
                        appointment It was built using HTML & CSS
                      </p>
                      <a
                        href="https://divinedentalhome.com.ng/"
                        target="_blank"
                      >
                        <p class="card-text text-right mt-3">
                          <small class="text-muted"> Learn More</small>
                          <box-icon
                            class="box-icon"
                            size="1.5rem"
                            color=" #323982"
                            name="link-alt"
                            type="solid"
                          ></box-icon>
                        </p>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divine Dental Home */}

            <div class="col-lg-6 col-md-12">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row tolu">
                  <div class="col-md-6 col1">
                    <div
                      class="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <a class="" href="!#" target="_blank">
                        <img src={img} alt="" class="img-fluid" />
                        <div
                          class="mask"
                          style={{
                            backgroundColor: +"rgba(251, 251, 251, 0.15",
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col2">
                    <div class="card-body">
                      <h5 class="card-title"> ToluAde Photography</h5>
                      <p class="card-text">
                        Here you can use rows and columns to organize your
                        footer content. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                      </p>
                      <a href="!#" target="_blank">
                        <p class="card-text text-right mt-3">
                          <small class="text-muted"> Learn More</small>
                          <box-icon
                            class="box-icon"
                            size="1.5rem"
                            color=" #323982"
                            name="link-external"
                            type="solid"
                          ></box-icon>
                        </p>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Columns */}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
