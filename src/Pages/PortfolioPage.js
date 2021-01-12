import React from "react";
import Portfolio from "../Components/Portfolio/Portfolio";
import Footer from "../Components/Footer";
import PortfolioShowcase from "../Components/Portfolio/PortfolioShowcase";
import GetInTouch from "../Components/Home/GetInTouch";

const PortfolioPage = () => {
  return (
    <>
      <PortfolioShowcase />
      <Portfolio />
      <GetInTouch/>
      <Footer />
    </>
  );
};

export default PortfolioPage;
