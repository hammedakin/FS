import React, { useState } from "react";

const EnrolForm = () => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [location, setLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  // const [radio, setRadio] = useState("")
  const [message, setMessage] = useState("")



  return (
    <>
      <section class="enrolform">
        <div class="container shadow hoverable">
          <div class="text-center mb-5">
            <h4> ENROLMENT/ REGISTRATION FORM</h4>
          </div>
          <div class="">
            <form>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-group mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="FIRST NAME"
                      name="firstname"
                      value={firstname} onChange={(event) => setFirstname(event.target.value)}

                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="LAST NAME"
                      name="lastname"
                      value={lastname} onChange={(event) => setLastname(event.target.value)}

                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-group mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="LOCATION"
                      name="location"
                      value={location} onChange={(event) => setLocation(event.target.value)}

                    />
                  </div>
                </div>

                

                <div class="col-md-12">
                  <div class="input-group mb-4">
                    <input
                      type="number"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="PHONE NUMBER"
                      name="phone"
                      value={phone} onChange={(event) => setPhone(event.target.value)}

                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-group mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="EMAIL"
                      name="email"
                      value={email} onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div class="col-md-12 mb-5 mt-3 ">
                  <div class="row">
                    <div class="col-3 text-left align-items-center">
                      <h6
                        class="pt-2"
                        style={{
                          fontWeight: 600,
                          color: "#323982",
                          fontSize: "120%",
                        }}
                      >
                        COURSE
                      </h6>
                    </div>
                    <div class="col-8">
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          class="custom-control-input"
                          id="defaultUnchecked"
                          name="defaultExampleRadios"
                        />
                        <label
                          class="custom-control-label"
                          for="defaultUnchecked"
                          style={{ fontWeight: 600, color: "#323982" }}
                        >
                          WEB DEVELOPMENT
                        </label>
                      </div>

                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          class="custom-control-input"
                          id="defaultChecked"
                          name="defaultExampleRadios"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="defaultChecked"
                          style={{ fontWeight: 600, color: "#323982" }}
                        >
                          BRANDING AND DESIGN
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class=" mb-4">
                    <textarea
                    type="text"
                      id="materialContactFormMessage"
                      class="form-control md-textarea"
                      rows="4"
                      placeholder="MESSAGE"
                      name=""
                      value={message} onChange={(event) => setMessage(event.target.value)}

                    ></textarea>
                  </div>
                </div>
                <button type="button" name="submit" class="btn px-5 mx-auto  shadow" >
                {" "}
               <h5>SUBMIT </h5>
              </button>
              </div>

            
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnrolForm;
