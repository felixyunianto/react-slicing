import React from "react";

const BrandItem = (props) => {
  const { type, children, className } = props;
  console.log(className)
  const backgroundColor =
    type === "all"
      ? " bg-secondary text-white "
      : type === "more"
      ? " bg-transparent text-text-700 "
      : " bg-white text-gray-400 ";
  return (
    <div
      className={
        className +
        backgroundColor +
        "rounded-lg px-3 py-2.5 flex justify-center items-center text-sm w-auto"
      }
    >
      {children}
    </div>
  );
};

export default BrandItem;
