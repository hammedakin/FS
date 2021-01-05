import React from 'react';
import { Link } from 'react-router-dom';


const GetInTouch = () => {
    return ( 
        <>
<section class="getintouch">
    <div class="container">
        <h4>Want to start a project?
 </h4>
<h6> We are ready to bring your ideas to life</h6>

<button class="btn"> <Link to="/contact"> GET IN TOUCH </Link> </button> 
    </div>
</section>


        </>
     );
}
 
export default GetInTouch;