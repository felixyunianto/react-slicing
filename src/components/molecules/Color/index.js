import React from "react";
import { ColorItem } from "../..";

const Color = (props) => {
  const { data, activeColor, onPress } = props;
  return (
    <div className="mt-8">
      <h1 className="text-secondary font-medium">Color</h1>
      <div class="w-full flex gap-2 my-4 flex-wrap">
        {data.colors.map((color) => {
          return (
            <ColorItem
              activeColor={activeColor}
              data={color}
              key={color.id}
              onPress={(value) => onPress(value)}
            >
              {color.name}
            </ColorItem>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
