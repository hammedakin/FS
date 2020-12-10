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

                <p>
                  {" "}
                 The application of tech tools, and digital technology to business and processes yields far more better results.
                </p>

                <button type="button" class="btn">
                  KNOW MORE
                </button>
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