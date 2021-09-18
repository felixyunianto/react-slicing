import React from "react";

const CarouselContent = (props) => {
  const { children } = props;
  return (
    <div className="w-full gap-2 laptop:flex desktop:flex">
      {children}
    </div>
  );
};

export default CarouselContent;
