import React from "react";

const BrandItem = (props) => {
  const { type, children, className, padding } = props;
  const backgroundColor =
    type === "all"
      ? " bg-secondary text-white "
      : type === "more"
      ? " bg-transparent text-text-700 "
      : " bg-white text-gray-400 ";
  const paddingSize = ` ${padding} `
  return (
    <div
      className={
        className +
        backgroundColor +
        paddingSize +
        "rounded-lg flex justify-center items-center text-sm w-auto"
      }
    >
      {children}
    </div>
  );
};

export default BrandItem;
