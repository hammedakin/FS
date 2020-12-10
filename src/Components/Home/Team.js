import React from 'react';
import img1 from './img/Timothy.jpg'
import img2 from './img/OluImmanuel.jpg'
import img3 from './img/TAP.JPG'
import img4 from './img/Temiloluwa.jpg'




const Team = () => {
    return (
        
         <>
    <section class="team">
        <div class="container mt-5">
            <div class="">
            <h4> THE TEAM</h4>
            </div>


            <div class="">
            <div class="row row-cols-2 row-cols-sm-6 row-cols-md-4">
              <div class="col mb-4">
                <div class="card">
                  <div class="card-body">
                    <img
                    src={img1}
                      
                      alt="Ayodele Tim"
                      class="mb-4 mt-2"
                    />
                    <h4 class="card-subtitle"> Ayodele Tim </h4>

                    <p class="card-text">
                    Principal, Fireswitch Academy
                    </p>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <div class="card-body">
                    <img
src={img3}
                      
                      alt="Ayodele Tolu"
                      class="mb-4 mt-2"
                    />
                    <h4 class="card-subtitle">Ayodele Tolu</h4>
                    <p class="card-text">
                    Vice-Principal Admin, Fireswitch Academy
                    </p>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <div class="card-body">
                    <img
src={img2}

                      alt="Adekuoroye Olusola"
                      class="mb-4 mt-2"
                    />
                    <h4 class="card-subtitle"> Adekuroye Olusola </h4>
                    <p class="card-text">
                   Vice-Principal Academics, Fireswitch Academy
                    </p>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <div class="card-body">
                    <img
src={img4}                      
                      alt="Abiodun Ojo Temi"
                      class="mb-4 mt-2"
                    />
                    <h4 class="card-subtitle"> Abiodun-Ojo Temi</h4>
                    <p class="card-text">
                      Professor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


    </section>
        </>
    
    );
}
 
export default Team;