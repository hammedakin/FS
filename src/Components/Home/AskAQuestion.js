import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const AskAQuestion = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [message, setMessage] = useState("")

    return (
        <Modal show={props.show} onHide={props.onHide}>
            {/* <Modal.Header closeButton>
                <h5 class="container text-center">ASK A QUESTION</h5>
            </Modal.Header> */}
            <Modal.Body style={{backgroundColor: "transparent"}}>


 <section class="askaq ">
     <div class="container shadow hoverable">
         <div class="text-center mb-5">
             <h4> ASK A QUESTION </h4>
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
                      placeholder=" NAME"
                      name="name"
                      value={name} onChange={(event) => setName(event.target.value)}

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
                  <div class=" mb-4">
                    <textarea
                    type="text"
                      id="materialContactFormMessage"
                      class="form-control md-textarea"
                      rows="4"
                      placeholder="YOUR IDEA/ QUESTION"
                      name=""
                      value={message} onChange={(event) => setMessage(event.target.value)}

                    ></textarea>
                  </div>
                </div>

                <button type="button" name="submit" class="btn px-5 mx-auto shadow" >
                {" "}
                <h5>SUBMIT </h5>
              </button>
              </div>

           
            </form>
         </div>
     </div>
 </section>
            </Modal.Body>
           
        </Modal>

    );

}

export default AskAQuestion;