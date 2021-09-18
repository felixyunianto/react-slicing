import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Quantity = (props) => {
  const { count, onPress } = props;
  const addCount = () => {
    onPress(count + 1);
  };

  const minCount = () => {
    onPress(count - 1);
  };
  return (
    <div className="w-full h-28 laptop:flex desktop:flex items-center justify-between">
      <h1 className="text-secondary font-medium">Quantity</h1>
      <div className="w-full laptop:w-9/12 desktop:w-9/12 laptop:px-4 desktop:px-4 mt-4 laptop:mt-0 desktop:0">
        <div className="w-full h-10 laptop:h-14 desktop:h-14 bg-third flex justify-between rounded-full items-center">
          <button
            className="h-10 w-10 laptop:w-14 desktop:w-14 laptop:h-14 desktop:h-14 border border-secondary rounded-full flex justify-center items-center bg-white hover:bg-gray-200"
            onClick={() => minCount()}
          >
            <FiMinus className="text-2xl" />
          </button>
          <h1 className="text-secondary text-2xl font-medium">{count}</h1>
          <button
            className="h-10 w-10 laptop:w-14 desktop:w-14 laptop:h-14 desktop:h-14 border border-secondary rounded-full flex justify-center items-center bg-white hover:bg-gray-200"
            onClick={() => addCount()}
          >
            <FiPlus className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
