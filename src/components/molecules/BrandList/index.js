import React from "react";
import { BrandItem } from "../..";
import { FiChevronRight } from "react-icons/fi";

const BrandList = (props) => {
  const { page } = props;
  const marginTop = page === "home" ? "" : "-mt-10 ";
  return (
    <div
      className={
        marginTop +
        "w-9/12 hidden mobile:hidden tablet:hidden laptop:flex desktop:flex gap-3"
      }
    >
      <BrandItem padding="px-3 py-2.5" type="all">
        ALL BRANDS
      </BrandItem>
      <BrandItem padding="px-3 py-2.5">Avali</BrandItem>
      <BrandItem padding="px-3 py-2.5">Zetta</BrandItem>
      <BrandItem padding="px-3 py-2.5">Barefoot</BrandItem>
      <BrandItem padding="px-3 py-2.5">Perindu</BrandItem>
      <BrandItem padding="px-3 py-2.5">Shoelovin</BrandItem>
      <BrandItem padding="px-3 py-2.5">Misletoe</BrandItem>
      <BrandItem padding="px-3 py-2.5" type="more">
        More Brands <FiChevronRight />
      </BrandItem>
    </div>
  );
};

export default BrandList;
