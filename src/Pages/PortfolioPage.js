import React from "react";
import Portfolio from "../Components/Portfolio/Portfolio";
import Footer from "../Components/Footer";
import PortfolioShowcase from "../Components/Portfolio/PortfolioShowcase";

const PortfolioPage = () => {
  return (
    <>
      <PortfolioShowcase />
      <Portfolio />
      <Footer />
    </>
  );
};

export default PortfolioPage;
