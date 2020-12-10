import React from 'react';
import Showcase from '../Components/Home/Showcase'
import Services from '../Components/Home/Services'
import Partners from '../Components/Home/Partners'
import Team from '../Components/Home/Team.js'
import Footer from '../Components/Footer'
import WhoWeAre from '../Components/Home/WhoWeAre';
import SocialMedia from '../Components/Home/SocialMedia';


const HomePage = () => {
    return ( 
        <>

    <Showcase/>
    <Services/>
    <Partners/>
    <WhoWeAre/>
    <Team/>
    <SocialMedia/>
    <Footer/>
    
   

        </>
     );
}
 
export default HomePage;