import React from "react";

const SidebarItem = (props) => {
  const { children } = props;
  return <div className="cursor-pointer text-base leading-2">{children}</div>;
};

export default SidebarItem;
