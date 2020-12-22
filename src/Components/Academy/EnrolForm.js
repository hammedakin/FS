import React from "react";

const EnrolForm = () => {
  return (
    <>
      <section class="enrolform ">
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
                    />
                  </div>
                </div>

                

                <div class="col-md-12">
                  <div class="input-group mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="PHONE NUMBER"
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
                      id="materialContactFormMessage"
                      class="form-control md-textarea"
                      rows="4"
                      placeholder="MESSAGE"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button type="button" class="btn px-5  shadow">
                {" "}
                <strong>SUBMIT </strong>{" "}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnrolForm;
