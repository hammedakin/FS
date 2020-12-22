import React from "react";

const Product = () => {
  return (
    <>
      <section class="product text-center">
        <div class="container">
          <div class="">
            <h4> We developed these products : </h4>
            <p>
              {" "}
              The application of tech tools, and digital technology to business
              and processes yields far more better results.
            </p>
          </div>
          </div>
          <div class="container-fluid">
            <div class="mt-5">
              <div class="row row-cols-1 row-cols-md-3">
                <div class="col-md-4 mb-4 ">
                  <div class="card hoverable h-100 wow animated fadeInLeft ">
                    <div class="card-body">
                    <box-icon class="box-icon" size='3rem' color=" #ff9a41" name='wallet-alt' type="solid"></box-icon>
                      <h4 class="card-subtitle"> Reni Trust </h4>
                      <p class="card-text">
                      This web application helps us with our safe online payment when transaction like purchases are done.
                      </p>

                      <p class="mt-3">Kindly visit <a target="_blank" href="https://renitrust.com">www.renitrust.com</a> for more information.</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4 ">
                  <div class="card hoverable h-100 wow animated fadeInLeft ">
                    <div class="card-body">
                    <box-icon class="box-icon" size='3rem' color=" #ff9a41" name='gift' type="solid"></box-icon>
                      <h4 class="card-subtitle"> Sheda Mart </h4>
                      <p class="card-text">
                      This was developed for creatives to buy and sell their personal product. It can also be used to purchase customized goods to your liking.
                      </p>

                      <p class="mt-3">Kindly visit <a target="_blank" href="https://shedamart.com">www.shedamart.com</a> for more information.</p>
                    </div>
                  </div> 
                </div>

                <div class="col-md-4 mb-4 ">
                  <div class="card hoverable h-100 wow animated fadeInLeft ">
                    <div class="card-body">
                    <box-icon class="box-icon" size='3rem' color=" #ff9a41" name='drupal' type="logo"></box-icon>
                      <h4 class="card-subtitle"> Gangimo </h4>
                      <p class="card-text">
                      This is a mobile app that gives you quick answer to any questions you might have in mind which is not limited to tech stuff.
                      </p>

                      <p class="mt-3">Kindly download the app online to enjoy answsers.</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4 ">
                  <div class="card hoverable h-100 wow animated fadeInLeft ">
                    <div class="card-body">
                    <box-icon class="box-icon" size='3rem' color=" #ff9a41" name='truck' type="solid"></box-icon>
                      <h4 class="card-subtitle">Eclipse Delivery </h4>
                      <p class="card-text">
                      This web application helps us with our safe delivery of parcels from one location to another.
                      </p>

                      <p class="mt-3">Kindly visit <a target="_blank" href="https://eclipsedeliveryservices.com">www.eclipsedeliveryservices.com</a> for more information.</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4 ">
                  <div class="card hoverable h-100 wow animated fadeInLeft ">
                    <div class="card-body">
                    <box-icon class="box-icon" size='3rem' color=" #ff9a41" name='coffee-alt' type="solid"></box-icon>
                    <box-icon class="box-icon" size='3rem' color=" #ff9a41" name='restaurant' type="solid"></box-icon>
                      <h4 class="card-subtitle"> Sheda Food</h4>
                      <p class="card-text">
                      This was developed for creatives to buy and sell their personal product. It can also be used to purchase customized goods to your liking.
                      </p>

                      <p class="mt-3">Kindly visit <a target="_blank" href="https://shedafood.com">www.shedafood.com</a> for more information.</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4 ">
                  <div class="card hoverable h-100 wow animated fadeInLeft ">
                    <div class="card-body">
                    <box-icon class="box-icon" size='3rem' color=" #ff9a41" name='camera-plus' type="solid"></box-icon>
                      <h4 class="card-subtitle"> ToluAde </h4>
                      <p class="card-text">
                      This web application helps us with our safe online payment when transaction like purchases are done.
                      </p>

                      <p class="mt-3">Kindly visit <a target="_blank" href="https://toluade.art">www.toluade.art</a> for more information.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div class=""></div>
      
      </section>
    </>
  );
};

export default Product;
