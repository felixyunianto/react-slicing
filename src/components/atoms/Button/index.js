import React from "react";

const Button = (props) => {
  const { children, type } = props;

  const color =
    type === "login" ? "bg-white text-secondary hover:bg-gray-200 cursor-pointer " : "bg-secondary text-white hover:bg-gray-700 cursor-pointer ";

  return <div className={( color ) + "text-sm rounded-lg py-2 w-28 flex justify-center items-center font-bold"}>{children}</div>;
};

export default Button;
