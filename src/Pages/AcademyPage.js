import React from "react";
import Footer from "../Components/Footer";
import Showcase from "../Components/Academy/AcademyShowcase";
import OurTutor from "../Components/Academy/OurTutor";
import WebDev from "../Components/Academy/WebDev";
import Branding from "../Components/Academy/Branding";


const AcademyPage = () => {
  return (
    <>
      <Showcase />
      <WebDev/>
      <Branding/>
      <OurTutor/>
      <Footer />
     
    </>
  );
};

export default AcademyPage;
