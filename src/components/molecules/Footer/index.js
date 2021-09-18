import React from "react";
import { FooterItem } from "../..";
import { FaFacebook, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const listOne = [
    "Marketplace sepatu online untuk wanita dan pria yang didirikan pada 2016. Kami hadir sebagai jawaban atas tantangan dunia teknologi yang semakin maju, termasuk dalam hal berbelanja secara onliine.",
  ];

  const listTwo = ["Boots", "Flats", "Heels", "Loafers", "Pantofels"];

  const listThree = ["About Us", "FAQ", "Shipping", "Return Policy"];

  return (
    <div className="w-full bg-primary px-8 justify-between bg-third py-12 laptop:px-32 desktop:px-32 laptop:flex desktop:flex">
      <FooterItem
        title="SHOESMART"
        titleClass="text-xl font-bold"
        data={listOne}
        className="w-full laptop:w-5/12 desktop:w-5/12"
      />
      <FooterItem
        title="Category"
        titleClass="text-lg font-medium"
        data={listTwo}
        className="w-full mt-4 laptop:mt-0 desktop:mt-0 laptop:w-1/4 desktop:w-1/4 laptop:pl-32 desktop:pl-32"
      />

      <FooterItem
        titleClass="text-lg font-medium"
        data={listThree}
        className="w-full laptop:w-1/4 desktop:w-1/4 laptop:pl-20 desktop:pl-20"
      />

      <div className="w-full flex justify-around mt-4 laptop:mt-0 desktop:mt-0 laptop:w-1/4 desktop:1/4 laptop:justify-end desktop:justify-end laptop:gap-4 desktop:gap-4">
        <FaTwitter className="text-2xl text-secondary"/>
        <FaFacebook className="text-2xl text-secondary"/>
        <FaYoutube className="text-2xl text-secondary"/>
        <FaPhoneAlt className="text-2xl text-secondary"/>
      </div>
    </div>
  );
};

export default Footer;
