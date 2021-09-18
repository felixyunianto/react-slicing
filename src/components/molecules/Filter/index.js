import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Filter = (props) => {
  const { filterToggle, setFilterToggle } = props;
  return (
    <div>
      <div className=" hidden laptop:block box-border h-52 bg-white rounded-lg  my-10 w-full">
        <div className="px-10 py-3 flex">
          <div className="w-1/4 text-2xl">
            <h1 className="mb-2">Sort</h1>
            <div className="flex flex-wrap ">
              <h1 className="text-sm bg-secondary rounded-lg text-center text-white px-2 justify-end py-2 mr-2 mb-2">
                Ascending
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                Descending
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                Lower Price
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                Higher Price
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                Newest
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                Oldest
              </h1>
            </div>
          </div>
          <div className="w-1/4 text-2xl">
            <h1 className="mb-2">Color</h1>
            <div className="flex flex-wrap">
              <h1 className="text-sm bg-red-600 rounded-lg text-center text-white px-4 justify-end py-1 mr-2 mb-2">
                Red
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-4  py-1 mr-2 mb-2">
                Yellow
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-4  py-1 mr-2 mb-2">
                Green
              </h1>
              <h1 className="text-sm border border-third bg-black justify-center text-white rounded-lg px-4  py-1 mr-2 mb-2">
                Black
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-4  py-1 mr-2 mb-2">
                Blue
              </h1>
              <h1 className="text-sm border border-third bg-pink-600 justify-center text-white rounded-lg px-4  py-1 mr-2 mb-2">
                Pink
              </h1>
            </div>
          </div>
          <div className="w-1/4 text-2xl">
            <h1 className="mb-2">Size</h1>
            <div className="flex flex-wrap">
              <h1 className="text-sm bg-secondary rounded-lg text-center text-white px-2 justify-end py-2 mr-2 mb-2">
                28
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                29
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                30
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                31
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                32
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                33
              </h1>

              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                34
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                35
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                36
              </h1>
              <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                40
              </h1>
            </div>
          </div>
          <div className="w-1/4 text-2xl">
            Price Range
            <div className="flex flex-wrap mt-5">
              <div className="mr-10 text-sm">Rp 0</div>
              <div className="text-sm ml-auto">Rp 200.000</div>
            </div>
            <div className="flex flex-wrap">
              <div className="flex  w-64 m-auto items-center h-10 justify-center">
                <div className="py-1 relative min-w-full">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="absolute h-2 rounded-full bg-red-400 w-0"
                      style={{ width: "58.5714%" }}
                    />
                    <div
                      className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                      unselectable="on"
                      onselectstart="return false;"
                      style={{ left: "58.5714%" }}
                    >
                      <div className="relative -mt-2 w-1">
                        <div
                          className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                          style={{ marginLeft: "-20.5px" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transparent mobile:block laptop:hidden desktop:hidden -mt-4 container flex mb-8">
        <button
          className="flex bg-white rounded-xl px-8 py-2 shadow flex items-center justify-between"
          onClick={() => {
            setFilterToggle(!filterToggle);
          }}
        >
          Filter <FiChevronDown className="ml-2"/>
        </button>
      </div>
      {filterToggle && (
        <div className="bg-white w-full top-10  left-0 laptop:hidden desktop:hidden z-50 ">
          <div className="px-10 py-3 ">
            <div className="w-full text-2xl border-b-2">
              Sort
              <div className="flex flex-wrap mt-3">
                <h1 className="text-sm bg-secondary rounded-lg text-center text-white px-2 justify-end py-2 mr-2 mb-2">
                  Ascending
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  Descending
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  Lower Price
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  Higher Price
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  Newest
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  Oldest
                </h1>
              </div>
            </div>
            <div className="w-full text-2xl border-b-2">
              Color
              <div className="flex flex-wrap mt-3">
                <h1 className="text-sm bg-red-600 rounded-lg text-center text-white px-4 justify-end py-1 mr-2 mb-2">
                  Red
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-4  py-1 mr-2 mb-2">
                  Yellow
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-4  py-1 mr-2 mb-2">
                  Green
                </h1>
                <h1 className="text-sm border border-third bg-black justify-center text-white rounded-lg px-4  py-1 mr-2 mb-2">
                  Black
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-4  py-1 mr-2 mb-2">
                  Blue
                </h1>
                <h1 className="text-sm border border-third bg-pink-600 justify-center text-white rounded-lg px-4  py-1 mr-2 mb-2">
                  Pink
                </h1>
              </div>
            </div>
            <div className="w-full text-2xl border-b-2">
              Size
              <div className="flex flex-wrap mt-3">
                <h1 className="text-sm bg-secondary rounded-lg text-center text-white px-2 justify-end py-2 mr-2 mb-2">
                  28
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  29
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  30
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  31
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  32
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  33
                </h1>

                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  34
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  35
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  36
                </h1>
                <h1 className="text-sm border border-third justify-center text-gray-400 rounded-lg px-2  py-2 mr-2 mb-2">
                  40
                </h1>
              </div>
            </div>
            <div className="w-full text-2xl border-b-2">
              Price Range
              <div className="flex flex-wrap mt-5">
                <div className="mr-10 text-sm">Rp 0</div>
                <div className="text-sm ml-auto">Rp 200.000</div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex  w-64 m-auto items-center h-10 justify-center">
                  <div className="py-1 relative min-w-full">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="absolute h-2 rounded-full bg-red-600 w-0"
                        style={{ width: "58.5714%" }}
                      />
                      <div
                        className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                        unselectable="on"
                        onselectstart="return false;"
                        style={{ left: "58.5714%" }}
                      >
                        <div className="relative -mt-2 w-1">
                          <div
                            className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                            style={{ marginLeft: "-20.5px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
