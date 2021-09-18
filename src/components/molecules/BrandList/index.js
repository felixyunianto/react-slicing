import React from "react";
import { BrandItem } from "../..";
import { FiChevronRight } from "react-icons/fi";

const BrandList = () => {
  return (
    <div className="w-9/12 hidden mobile:hidden tablet:hidden laptop:flex desktop:flex gap-3">
      <BrandItem type="all">ALL BRANDS</BrandItem>
      <BrandItem>Avali</BrandItem>
      <BrandItem>Zetta</BrandItem>
      <BrandItem>Barefoot</BrandItem>
      <BrandItem>Perindu</BrandItem>
      <BrandItem>Shoelovin</BrandItem>
      <BrandItem>Misletoe</BrandItem>
      <BrandItem type="more">More Brands <FiChevronRight/></BrandItem>
    </div>
  );
};

export default BrandList;
