import React from "react";
import { BrandList } from "..";
import { Search } from "../..";

const Header = (props) => {
    const {page} = props
  return (
    <div className={"flex h-20 w-full py-4 mobile:px-4 tablet:px-4 laptop:px-16 desktop:px-16 gap-12 " + (page === 'home' ? 'flex-row-reverse items-center justify-between ' : "flex-col ")}>
      <Search page={page}/>
      <BrandList />
    </div>
  );
};

export default Header;
