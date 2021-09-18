import React from "react";

const SizeItem = (props) => {
  const { children, size, activeSize, onPress } = props;
  const background =
    activeSize === size.id ? "bg-secondary text-white " : "text-secondary ";
  return (
    <button
      className={
        background +
        "text-sm w-7 laptop:w-12  desktop:w-12  h-7 desktop:h-12 laptop:h-12 border-secondary border-2 flex justify-center items-center rounded-md hover:bg-gray-200"
      }
      onClick={() => onPress(size.id)}
    >
      {children}
    </button>
  );
};

export default SizeItem;
