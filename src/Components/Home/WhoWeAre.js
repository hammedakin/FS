import React from "react";

import img from "./img/IMG_8774.JPG";

const WhoWeAre = () => {
  return (
    <>

      <section class="whoweare mt-5">
        <div class="">
          <div class="row">
            <div class="col-md-8">
              <div class="row row-text">
                <div class="col-sm-6">
                  <div class="">
                    <h4>Who We Are?</h4>
                  </div>

                  <div class="text-justify">
                    <p>
                    We are tech driven digital agency committed to providing tech solution to common business problems.
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="">
                    <h4>Who We Service?</h4>
                  </div>

                  <div class="text-justify">
                    <p>
                    We service business and business owners who seek tech solutions.

                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="">
                    <h4> Why Go Digital </h4>
                  </div>

                  <div class="text-justify">
                    <p>
                    Going digital offers endless opportunities higher productivity and efficient business decisions.
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="">
                    <h4>How Can We Help You?</h4>
                  </div>

                  <div class="text-justify">
                    <p>
                    We can provide the help and guidance needed to take your brand from where it is to where you need it to be.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 text-center">
              <div class=" ">
                <div class="fstext">
                  <h4> What makes us different ?</h4>
                </div>
                <div class="">
                  <img src={img} alt="tree" width="100%"/>
                </div>
                <div class="text-justify px-5 ">
                  <p  class="">
                    {" "}
                    We genuinely care about your business and we constantly think of ideas & new technologies to give you your customers the best experience.{" "}
                  </p>
                  <button class="btn "> GET STARTED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
