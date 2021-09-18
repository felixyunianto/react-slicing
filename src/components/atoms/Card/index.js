import React from "react";
import { FiHeart } from "react-icons/fi";
import { shoesOne } from "../../../assets";

const Card = (props) => {
  const { item } = props;
  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <FiHeart className="ml-auto" />
      <div className="p-3">
        <img
          src={shoesOne}
          alt="product"
          className="w-full object-contain bg-blue-400"
        />
      </div>
      <div className="py-2 h-12 w-full"><h1 className="text-sm">{item.name}</h1></div>
      <div className="py-2 w-full mt-2">
        <h1 className="text-base font-bold">{Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR'
        }).format(item.price).split(',')[0]}</h1>
      </div>
    </div>
  );
};

export default Card;
