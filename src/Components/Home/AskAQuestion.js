import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from 'axios'


const AskAQuestion = (props) => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [location, setlocation] = useState('')
  const [idea, setidea] = useState('')
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN)
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT)

  const askAQuestion = (e) => {

    const data = {
      apptoken: apptoken,
      action: '02',
      name: name,
      mail: email,
      location: location,
      idea: idea
    }
    axios
      .get(
        `${endpoint}/`, {
        params: data
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.response == data.action) {
          console.log(res.data.message)
        } else {
          console.log(res.data.message)
        }
      })
      .catch((error) => {
        console.log(error.name)

      });

    e.preventDefault();
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "transparent!important" }}
      >



        <section class="askaq ">
          <div class="container shadow hoverable">
            <div class="text-center mb-5">
              <h4> ASK A QUESTION </h4>

            </div>
            <div class="">
              <form onSubmit={e => askAQuestion(e)}
              >
                <div class="row">
                  <div class="col-md-12">
                    <div class="input-group mb-4">
                      <input
                        type="text"
                        class="form-control"
                        id="materialContactFormName"
                        placeholder=" NAME"
                        onChange={e => setname(e.target.value)}
                        value={name}
                      />
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="input-group mb-4">
                      <input
                        type="text"
                        class="form-control"
                        id="materialContactFormEmail"
                        placeholder="EMAIL"
                        name="email"
                        onChange={(event) => setemail(event.target.value)}
                        value={email}
                      />
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="input-group mb-4">
                      <input
                        type="text"
                        class="form-control"
                        id="materialContactFormAddress"
                        placeholder="LOCATION"

                        onChange={e => setlocation(e.target.value)}
                        value={location}
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

                        onChange={e => setidea(e.target.value)}
                        value={idea}
                      ></textarea>
                    </div>
                  </div>

                  <button class="btn px-5 mx-auto shadow"
                    onClick={e => askAQuestion(e)}>
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