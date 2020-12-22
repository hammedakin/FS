import React from 'react';
import {Link } from 'react-router-dom'
import img from './FireSwitch_logo.png'




const Navbar = () => {
    return ( 
        <>


<nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">

 
<Link to="/" class="" >
  <img src={img} width="40%" class="navbar-brand" alt="FireSwitch_logo"/>
</Link>

 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> 


  <div class="collapse navbar-collapse" id="basicExampleNav">

    <ul class="navbar-nav ml-auto text-center">
      <li class="nav-item active show">
      <Link to="/" class="nav-link " href="#about">About</Link>

      </li>
    
      <li class="nav-item">
      <Link to="/academy" class="nav-link" >Academy</Link>
            </li>
            <li class="nav-item">
      <Link to="/product" class="nav-link" >Products</Link>
            </li>

            <li class="nav-item">
        <Link to="/contact" class="nav-link" >Contact</Link>
      </li>

    </ul>
 

    <button type="button" class="btn">Ask Question ?</button>

    
  </div>
 

</nav>


        </>
     );
}
 
export default Navbar;