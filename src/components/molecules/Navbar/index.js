import React from "react";
import { Button } from "../..";
import { FiShoppingBag, FiMoreVertical, FiMenu, FiX } from "react-icons/fi";

const Navbar = (props) => {
  const {
    title,
    navbarToggle,
    setNavbarToggle,
    sidebarToggle,
    setSidebarToggle,
  } = props;
  return (
    <div className="bg-white box-border w-full h-20 flex items-center mx-auto justify-between mobile:px-4 tablet:px-4 laptop:px-16 desktop:px-16 relative">
      <div className="flex-1 gap-2 items-center hidden laptop:flex">
        <FiShoppingBag className="text-2xl" />
        <h1 className="text-xl font-medium">{title}</h1>
      </div>
      <div className="text-2xl font-bold flex flex-1 justify-start laptop:justify-center desktop:justify-center items-center gap-2">
        <button
          className="outline-none"
          onClick={() => {
            setSidebarToggle(!sidebarToggle);
          }}
        >
          {sidebarToggle ? (
            <FiX className="text-2xl cursor-pointer hidden mobile:block tablet:block laptop:hidden desktop:hidden" />
          ) : (
            <FiMenu className="text-2xl cursor-pointer hidden mobile:block tablet:block laptop:hidden desktop:hidden" />
          )}
        </button>
        <h1>SHOESMART</h1>
      </div>
      <div className="flex justify-end items-center flex-1 hidden gap-2 laptop:flex ">
        <Button type="login">Login</Button>
        <Button type="register">Register</Button>
      </div>
      <div className="flex items-center justify-end flex-1 gap-2 mobile:flex laptop:hidden">
        <button
          onClick={() => {
            setNavbarToggle(!navbarToggle);
          }}
        >
          <FiMoreVertical className="text-2xl cursor-pointer" />
        </button>
      </div>
      {navbarToggle && (
        <div className="bg-white absolute w-full top-20 left-0 laptop:hidden h-28 rounded-b-lg px-4 z-50 shadow-md">
          <div className="w-full border-b-2 text-xl font-medium py-2">
            Login
          </div>
          <div className="w-full border-b-2 text-xl font-medium py-2">
            Register
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
