import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useLocation } from "react-router";
import {
  BrandItem,
  Footer,
  HeroProductDetail,
  Navbar,
  Testimonial,
} from "../../components";

const Product = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const location = useLocation();

  const product = location.state.product;

  return (
    <div className="box-border bg-primary w-full h-full">
      <Navbar
        title="Product"
        navbarToggle={navbarToggle}
        setNavbarToggle={setNavbarToggle}
      ></Navbar>
      <div className="w-full box-border px-4 laptop:px-16 desktop:px-16">
        <HeroProductDetail data={product} />
        <Testimonial data={product} />
        <div className="w-full flex justify-center mb-24">
          <BrandItem type="all" padding="px-4 py-2.5">See more review <FiChevronDown className="text-white ml-2 text-lg"/></BrandItem>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
