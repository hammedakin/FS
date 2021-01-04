import React, {useEffect, useState} from "react";
import axios from 'axios'

const ContactUs = () => {

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [message, setmessage] = useState('')
const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN)
const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT)

  const contactUs = (e) => {

    const data ={
      apptoken:apptoken,
      action:'01',
      name:name,
      mail:email,
      message:message
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
    <>
      <section class="contact">
        <div class="">
          <div class="" id="contact">
            <div class="row">
              <div class="col-md-7 mb-4 wow animated fadeInLeft">
                <div class="card h-100">
                  <h4 class="card-header text-center py-4">
                    <strong>Contact Us</strong>
                  </h4>
                  <div class="text-center mt-3 px-4">
                    <div class="">
                      <box-icon
                        name="envelope"
                        class="box-icon"
                        size="2rem"
                        color=" #fff"
                      ></box-icon>
                      <h6>hello@fireswitch.tech</h6>
                    </div>

                    <div class="">
                      {" "}
                      <hr />
                      <box-icon
                        name="phone"
                        class="box-icon"
                        size="2rem"
                        color=" #fff"
                      ></box-icon>
                      <h6>0905 998 1228</h6>
                    </div>

                    <div class="">
                      <hr />
                      <box-icon
                        name="map"
                        class="box-icon"
                        size="2rem"
                        color=" #fff"
                      ></box-icon>
                      <h6 class="text-uppercase">
                        Sheda House, No 4, Orogun Road, Ibadan, Oyo State.
                      </h6>
                    </div>

                    <div class="socials mt-5">
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
                  </div>
                </div>
              </div>

              <div class="col-md-5 mb-4 wow animated fadeInRight">
                <div class="card h-100">
                  <h5 class="card-header  text-center py-4">
                    <strong>Feel Free to write to Us.</strong>
                  </h5>

                  <div class="card-body px-lg-5 pt-0">
                    <form
                      class="text-center"
                      // onSubmit={e=>contactUs(e)}
                    >
                      <div class="md-form mt-3">
                        <input
                          type="text"
                          id="materialContactFormName"
                          class="form-control"
                          placeholder="Name"
                          onChange={e => setname(e.target.value)}
                          value={name}
                        />
                      </div>

                      <div class="md-form">
                        <input
                          type="email"
                          id="materialContactFormEmail"
                          class="form-control"
                          placeholder="Email"
                          onChange={e => setemail(e.target.value)}
                          value={email}

                        />
                      </div>

                      <div class="md-form">
                        <textarea
                          id="materialContactFormMessage"
                          class="form-control md-textarea"
                          rows="4"
                          placeholder="Message"
                          onChange={e => setmessage(e.target.value)}
                          value={message}

                        ></textarea>
                      </div>

                      <button
                        class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect"
                       onClick={e => contactUs (e)}
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0922097675057!2d3.9061924502933314!3d7.455050694595511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed522de783bf%3A0xfd6cec114987cc57!2sFireswitch%20Technology!5e0!3m2!1sen!2sng!4v1607517890431!5m2!1sen!2sng"
            width="100%"
            height="350"
            frameborder="3"
            style={{ border: 3 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
