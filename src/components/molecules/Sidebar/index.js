import React from "react";
import { Category } from "..";
import { sidebarJson } from "../../../assets";

const Sidebar = (props) => {
  const { sidebarToggle } = props;
  return (
    <>
      <div className="w-2/12 hidden laptop:block desktop:block">
        <Category title="Product" data={sidebarJson.product} />
        <Category title="Category" data={sidebarJson.category} />
        <Category title="Information" data={sidebarJson.information} />
      </div>
      {sidebarToggle && (
        <div className="absolute mobile:w-3/4 tablet:w-2/4 top-20 left-0 z-50 bg-white h-full px-4 laptop:hidden desktop:hidden">
          <Category title="Product" data={sidebarJson.product} />
          <Category title="Category" data={sidebarJson.category} />
          <Category title="Information" data={sidebarJson.information} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
