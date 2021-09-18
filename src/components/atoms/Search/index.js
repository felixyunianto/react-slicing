import React from "react";

const Search = (props) => {
  const { page } = props;
  return (
    <div
      className={
        (page === "home" ? "block " : "w-5/12 ") +
        "w-full mobile:w-full tablet:w-full laptop:w-4/12 desktop:w-4/12"
      }
    >
      <div
        className={
          (page === "home" ? "" : "-mt-4 ") +
          "rounded-lg py-2 px-8 flex justify-between items-center font-medium bg-white "
        }
      >
        <input
          placeholder="Search your favorites shoes ..."
          className="outline-none w-full text-sm"
        />
        <div className="w-6 h-6 relative">
          <div className="w-full h-full rounded-full border-2 border-secondary"></div>
          <div className="h-2 w-2 absolute bottom-0 right-0 rounded-full bg-secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
