import React from 'react';
import { Link } from 'react-router-dom';
import img from './404-error.svg'

const PageNotFound = () => {
    return ( 
        <>

<section class="pagenotfound">
    <div class="container aaa">
        <img src={img} width="20%" alt="page not found"/>
       <br/> <h4 class="mt-3"> Page not found</h4>
        <h5> Go to Homepage <Link to="/home"> here </Link></h5>
 <hr/>
        <div class="container mt-3">
        <h5>Want to start a project?
 </h5>
 
<button class="btn"> <Link to="/contact" class="text-white"> GET IN TOUCH </Link> </button> 
    </div>
    </div>
</section>

        </>
     );
}
 
export default PageNotFound;