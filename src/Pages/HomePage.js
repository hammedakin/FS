import React from 'react';
import Showcase from '../Components/Home/Showcase'
import Services from '../Components/Home/Services'
import Partners from '../Components/Home/Partners'
import Team from '../Components/Home/Team.js'
import Footer from '../Components/Footer'
import WhoWeAre from '../Components/Home/WhoWeAre';
import SocialMedia from '../Components/Home/SocialMedia';
import GetInTouch from '../Components/Home/GetInTouch';


const HomePage = () => {
    return ( 
        <>

    <Showcase/>
    <Services/>
    <Partners/>
    <WhoWeAre/>
    <Team/>
    <SocialMedia/>
    <GetInTouch/>
    <Footer/>
    
   

        </>
     );
}
 
export default HomePage;