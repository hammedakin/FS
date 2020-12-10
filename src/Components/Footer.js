import React from "react";

const Footer = () => {
  return (
    <div>
      <section class="footer">
        <div class="">
          <footer class="page-footer font-small pt-4">
            <div class="container text-center text-md-left">
              <div class="row">
                <div class="col-md-4 mx-auto">
                  <h5 class=" text-uppercase mt-3 mb-4">
                    FIRESWITCH
                  </h5>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <hr class="clearfix w-100 d-md-none" />

                <hr class="clearfix w-100 d-md-none" />

                <div class="col-md-2 mx-auto">
                  <h5 class=" text-uppercase mt-3 mb-4">
                    Links
                  </h5>

                  <ul class="list-unstyled">
                    <li>
                      <a href="#!">FAQs</a>
                    </li>
                    <li>
                      <a href="#!">About Us</a>
                    </li>
                    <li>
                      <a href="#!">Contact </a>
                    </li>
                    <li>
                      <a href="#!">Products</a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-4">
                  <div class="text-center py-2">
                    <form>
                    <h5 class=" text-uppercase mt-3 mb-4">
                    SUBSCRIBE
                  </h5>
                      <div class="form-group ">
                        <div class="md-form mt-0">
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail3MD"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <button type="submit" class="btn btn-lg">
                        SUBMIT
                      </button>

                      <div class="form-group row"></div>
                    </form>

                   
                  </div>
                </div>
            
              </div>

              <hr class="white" />

              <div class="text-center mb-3">
              <a href="#" target="_blank" >
                  <box-icon class="box-icon" size='2rem' color=" #ff9a41" type="logo" name="facebook"></box-icon>
                </a>

                <a href="#" target="_blank" >
                  <box-icon class="box-icon" size='2rem' color=" #ff9a41" name="instagram" type="logo"></box-icon>
                </a>

                <a href="#" target="_blank" >
                  <box-icon class="box-icon" size='2rem' color=" #ff9a41" name="twitter" type="logo"></box-icon>
                </a>

                <a href="#" target="_blank" >
                  <box-icon class="box-icon" size='2rem' color=" #ff9a41" name='linkedin-square' type="logo"></box-icon>
                </a>

                <a href="mailto:" target="_blank" >
                  <box-icon class="box-icon" size='2rem' color=" #ff9a41" name="youtube" type="logo"></box-icon>
                  
                </a>
              </div>
            </div>

           

            <div class="">
              <div class="footer-copyright text-center py-3">
                © 2020 Copyright:
                <a href="https://www.fireswitch.tech/"> FIRESWITCH TECHNOLOGIES </a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Footer;
