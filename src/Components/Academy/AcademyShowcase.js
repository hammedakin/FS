import React from 'react';


const AcademyShowcase = () => {
    return ( 
        <>

<section class="showcase">
        <div class="container ">
          <div class="showcase-content">
            <div class="row">
              <div class="col-md-8 animated fadeInLeft">
                <h1> We teach to create tech solutions.</h1>

                {/* <p>
                  {" "}
                 The application of tech tools, and digital technology to business and processes yields far more better results.
                </p> */}
                 <div class=" pb-5">
          <h5> You want to learn?</h5>
          <h5> We want to help you learn fast.</h5>
          <p> We have figured out how to learn fast and we have just the right environment to help you thrive.</p>
        </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section >
        <div class="container px-4 py-4 text-center">
          <h2 style={{fontWeight: '600', color: '#323982'}} >  FireSwitch Academy </h2>
        </div>

       
      </section>
        </>
     );
}
 
export default AcademyShowcase;