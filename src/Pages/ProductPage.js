import React from "react";
import Product from "../Components/Product/Product";
import ProductShowcase from "../Components/Product/ProductShowcase";
import Footer from "../Components/Footer";

const ProductPage = () => {
  return (
    <>
      <ProductShowcase />
      <Product />
      <Footer />
    </>
  );
};

export default ProductPage;
