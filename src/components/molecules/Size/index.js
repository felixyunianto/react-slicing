import React from "react";
import { SizeItem } from "../..";

const Size = (props) => {
  const { variant, activeSize, onPress } = props;
  return (
    <div className="my-2">
      <h1>Size</h1>
      <div className="w-full flex flex-wrap gap-2 mt-2 laptop:grid laptop:grid-cols-5 desktop:grid desktop:grid-cols-5">
        {variant.sizes.map((size) => {
          return (
            <SizeItem key={size.id} size={size} activeSize={activeSize} onPress={(value) => onPress(value)}>
              {size.size}
            </SizeItem>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
