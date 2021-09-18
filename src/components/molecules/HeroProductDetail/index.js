import React, { useState } from "react";
import { shoesOne } from "../../../assets";
import { BrandItem, Image, CarouselProduct } from "../../atoms";
import parse from "html-react-parser";
import { Size, Thumbnail, Color, Quantity } from "..";

const HeroProductDetail = (props) => {
  const { data } = props;
  const [count, setCount] = useState(1);

  const [activeColor, setActiveColor] = useState(data.colors[0].id);
  const [activeSize, setActiveSize] = useState(data.variants[0].sizes[0].id);

  const [variant, setVariant] = useState(data.variants[0]);

  const descriptionContent = (string) => {
    let newString = string.replace(/<\/?[^>]+>/gi, "").toString();
    const regexp = /[-]/;

    if (regexp.test(newString.replace(/-[ ]/g, "-"))) {
      newString = newString.split("-").join("<br/>-");
    } else {
      newString = string;
    }
    return parse(newString);
  };

  const findVariant = (color_id) => {
    setActiveColor(color_id);
    const choosedVariant = data.variants.find((variant) => {
      return variant.color_id === color_id;
    });

    setVariant(choosedVariant);
    setActiveSize(choosedVariant.sizes[0].id);
  };

  return (
    <div className="flex bg-third rounded-lg mt-16 mb-4">
      <div className="w-full laptop:w-8/12 desktop:w-8/12 bg-bg-third">
        <div className="w-full flex flex-col">
          <div className="p-4 laptop:p-8 desktop:p-8 laptop:flex desktop:flex">
            <Thumbnail>
              <Image className="w-60" image={shoesOne} />
            </Thumbnail>
            <div className="w-1/2 flex flex-col hidden laptop:block desktop:block">
              <div className="w-full flex justify-between items-center pb-2">
                <BrandItem padding="py-1 px-3" type="all">
                  Description
                </BrandItem>
                <BrandItem padding="py-1 px-3" type="more">
                  Details
                </BrandItem>
                <BrandItem padding="py-1 px-3" type="more">
                  Instructions
                </BrandItem>
              </div>
              <div className="w-full bg-white rounded-lg text-sm p-4 pb-8">
                {descriptionContent(data.description)}
              </div>
            </div>
          </div>
          <div className="w-full h-full px-8 pb-8 mb-8">
            <CarouselProduct
              data={[shoesOne, shoesOne, shoesOne, shoesOne, shoesOne]}
            />
            <div className="w-full bg-white rounded-lg laptop:shadow-left desktop:shadow-left p-8 laptop:hidden desktop:hidden my-6">
              <h1 className="text-sm laptop:text-lg desktop:text-lg font-medium">
                {data.name}
              </h1>
              <Size
                variant={variant}
                activeSize={activeSize}
                onPress={(value) => setActiveSize(value)}
              />
              <Color
                data={data}
                activeColor={activeColor}
                onPress={(value) => findVariant(value)}
              />
              <Quantity count={count} onPress={setCount} />
              <div className="w-full my-4">
                <h1 className="text-secondary font-medium">Price</h1>
                <h1 className="text-secondary text-2xl font-bold mt-2">
                  {
                    Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })
                      .format(data.price)
                      .split(",")[0]
                  }
                </h1>
              </div>
              <div className="w-fill justify-between items-center h-24 flex">
                <button className="w-5/12 border border-secondary text-secondary font-medium rounded-lg py-2 text-sm laptop:text-base desktop:text-base">
                  Add to cart
                </button>
                <button className="w-6/12 py-3 border border-secondary bg-secondary font-medium rounded-lg laptop:text-2xl desktop:text-2xl text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/12 bg-white rounded-lg shadow-left p-8 hidden laptop:block desktop:block">
        <h1 className="text-lg font-medium">{data.name}</h1>
        <Size variant={variant} activeSize={activeSize} onPress={(value) => setActiveSize(value)}/>
        <Color
          data={data}
          activeColor={activeColor}
          onPress={(value) => findVariant(value)}
        />
        <Quantity count={count} onPress={setCount} />
        <div className="w-full my-8">
          <h1 className="text-secondary font-medium">Price</h1>
          <h1 className="text-secondary text-2xl font-bold mt-2">
            {
              Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              })
                .format(data.price)
                .split(",")[0]
            }
          </h1>
        </div>
        <div className="w-fill justify-between items-center h-24 flex">
          <button className="w-5/12 border border-secondary text-secondary font-medium rounded-lg py-2">
            Add to cart
          </button>
          <button className="w-6/12 py-3 border border-secondary bg-secondary font-medium rounded-lg text-2xl text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroProductDetail;
