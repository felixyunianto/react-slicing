import React from "react";
import Slider from "react-slick";
import { Image } from "..";

const CarouselProduct = (props) => {
  const { data } = props;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const settingsMobile = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className="w-full laptop:hidden desktop:hidden">
        <Slider {...settingsMobile}>
          {data &&
            data.map((item, index) => {
              return (
                <div className="relative" key={index}>
                  <div className="flex justify-center w-full laptop:w-11/12 desktop:w-11/12 px-3 py-2 bg-white rounded-xl items-center">
                    <Image className="w-32 h-32" image={item} />
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
      <div className="w-full hidden laptop:block desktop:block">
        <Slider {...settings}>
          {data &&
            data.map((item, index) => {
              return (
                <div className="relative" key={index}>
                  <div className="flex justify-center w-full laptop:w-11/12 desktop:w-11/12 px-3 py-2 bg-white rounded-xl items-center">
                    <Image className="w-32 h-32" image={item} />
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default CarouselProduct;
