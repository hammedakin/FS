import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return ( 
        <>

<section class="pagenotfound mt-5 align-center">
    <div class="container">
        Page not found, pada wa later
        <Link to="/home">Go Home </Link>
    </div>
</section>

        </>
     );
}
 
export default PageNotFound;