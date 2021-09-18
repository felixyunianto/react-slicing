import React from "react";

const Content = (props) => {
  const { children, page } = props;
  const width =
    page === "product" ? "w-full " : "laptop:w-10/12 desktop:w-10/12 ";
  return (
    <div className={(width) + "w-full"}>
      {children}
    </div>
  );
};

export default Content;
