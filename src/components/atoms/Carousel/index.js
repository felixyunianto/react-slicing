import React from "react";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-50 top-1/3 text-white cursor-pointer"
      onClick={onClick}
    >
      <FiChevronLeft className="text-xl tablet:text-5xl laptop:text-7xl desktop:text-7xl" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-50 top-1/3 text-white right-0 cursor-pointer"
      onClick={onClick}
    >
      <FiChevronRight className="text-xl tablet:text-5xl laptop:text-7xl desktop:text-7xl" />
    </div>
  );
};

const Carousel = (props) => {
  const { data, type } = props;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: type === "promo" ? false : <PrevArrow />,
    nextArrow: type === "promo" ? false : <NextArrow />,
    arrows: type === "promo" ? false : true,
  };
  return (
    <div
      className={
        (type === "promo"
          ? "laptop:w-1/2 desktop:w-1/2 laptop:pr-2 desktop:pr-2 "
          : "") + "h-full w-full"
      }
    >
      <Slider {...settings}>
        {data &&
          data.map((item, index) => {
            return (
              <div className="rounded-xl w-full h-full relative" key={index}>
                <img
                  src={item}
                  alt="carousel"
                  className="object-cover rounded-xl"
                />
                ;
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
