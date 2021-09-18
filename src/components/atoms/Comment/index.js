import React from "react";
import { FaStar } from "react-icons/fa";
import { testi } from "../../../assets";

const Comment = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="w-full">
      <h1 className="font-bold text-secondary">
        What they think about this product?
      </h1>
      <div className="w-full justify-between gap-4 mt-4 laptop:flex desktop:flex">
        <div className="w-full laptop:w-2/12 desktop:w-2/12 flex items-center flex-col px-4 py-2">
          <img src={testi} alt="comment" className="w-24" />
          <div className="w-full flex justify-center laptop:justify-between desktop:justify-between mt-3 gap-2">
            <FaStar className="text-yellow-500 text-xl" />
            <FaStar className="text-yellow-500 text-xl" />
            <FaStar className="text-yellow-500 text-xl" />
            <FaStar className="text-yellow-500 text-xl" />
            <FaStar className="text-yellow-500 text-xl" />
          </div>
        </div>
        <div className="w-full laptop:w-10/12 desktop:w-10/12  bg-third rounded-xl p-8">
          <div className="justify-between items-end mb-4 laptop:flex desktop:flex">
            <h1 className="font-bold text-secondary">
              Rosalina, Ibu rumah tangga
            </h1>
            <h1 className="font-bold text-gray-300 text-xs">
              Tuesday, 20 June 2019
            </h1>
          </div>
          <p className="text-secondary text-xs">
            {`${data.name} sangat cocok dipakai suami saya, bahannya sangat bagus. Terima kasih Shoesmart!`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
