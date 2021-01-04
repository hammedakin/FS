import React, {useEffect, useState} from "react";
import axios from 'axios'
import img from "./FS_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {

  const [email, setemail] = useState('')
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN)
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT)
  
    const subscribe = (e) => {
  
      const data ={
        apptoken:apptoken,
        action:'03',
        mail:email,
      }
      axios
      .get(
        `${endpoint}/`,{
          params:data
  })
  .then((res) => {
  console.log(res.data);
        if(res.data.response==data.action){
       console.log(res.data.message)
      }else{
     console.log(res.data.message)
      }
      })
      .catch((error) => {
     console.log(error.name)
     
      });
  
  e.preventDefault();
    }
  
  return (
    <div>
      <section class="footer">
        <div class="">
          <footer class="page-footer font-small pt-4">
            <div class="container text-center">
              <div class="row">
                <div class="col-md-4 mx-auto">
                  <h5 class=" text-uppercase mt-3 mb-4">FIRESWITCH</h5>
                  <div class="">
                    <img src={img} width="" alt="FireSwitch Logo" />
                  </div>
                  <p>
                  FireSwitch Tech is a foremost technology company commited to solving common business problems using digital technology.
                  </p>
                </div>

                <div class="col-md-2 mx-auto hide">
                  <h5 class=" text-uppercase mt-3 mb-4">Links</h5>

                  <ul class="list-unstyled ">
                    <li class="">
                      <Link to="/" class="nav-link">
                        HOME
                      </Link>
                    </li>

                    <li class="nav-item">
                      <Link to="/academy" class="nav-link">
                        ACADEMY
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/product" class="nav-link">
                        PRODUCTS
                      </Link>
                    </li>

                    <li class="nav-item">
                      <Link to="/contact" class="nav-link">
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="col-md-4">
                  <div class="text-center py-2">
                    <form>
                      <h5 class=" text-uppercase mt-3 mb-4">SUBSCRIBE</h5>
                      <div class="form-group ">
                        <div class="md-form mt-0">
                          <input
                            type="email"
                            class="form-control"
                            id="materialContactFormEmail"
                            placeholder="Email"
                            onChange={e => setemail(e.target.value)}
                            value={email}
                          />
                        </div>
                      </div>
                      <button class="btn btn-lg"
                       onClick={e => subscribe (e)}
                      
                      >
                        SUBMIT
                      </button>

                      <div class="form-group row"></div>
                    </form>
                  </div>
                </div>
              </div>

              <hr class="white" />

              <div class="text-center mb-3">
                <a href="#" target="_blank">
                  <box-icon
                    class="box-icon"
                    size="2rem"
                    color=" #ff9a41"
                    type="logo"
                    name="facebook"
                  ></box-icon>
                </a>

                <a href="#" target="_blank">
                  <box-icon
                    class="box-icon"
                    size="2rem"
                    color=" #ff9a41"
                    name="instagram"
                    type="logo"
                  ></box-icon>
                </a>

                <a href="#" target="_blank">
                  <box-icon
                    class="box-icon"
                    size="2rem"
                    color=" #ff9a41"
                    name="twitter"
                    type="logo"
                  ></box-icon>
                </a>

                <a href="#" target="_blank">
                  <box-icon
                    class="box-icon"
                    size="2rem"
                    color=" #ff9a41"
                    name="linkedin-square"
                    type="logo"
                  ></box-icon>
                </a>

                <a href="mailto:" target="_blank">
                  <box-icon
                    class="box-icon"
                    size="2rem"
                    color=" #ff9a41"
                    name="youtube"
                    type="logo"
                  ></box-icon>
                </a>
              </div>
            </div>

            <div class="">
              <div class="footer-copyright text-center py-3">
                © 2020 Copyright:
                <a href="https://www.fireswitch.tech/">
                  {" "}
                  FIRESWITCH TECHNOLOGIES{" "}
                </a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Footer;
