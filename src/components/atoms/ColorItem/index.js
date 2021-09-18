import React from "react";

const ColorItem = (props) => {
  const { activeColor, data, children, onPress } = props;
  const border =
    activeColor === data.id
      ? data.rgb === "#000000"
        ? "text-white border-0 "
        : "border-0 "
      : "border-2 border-third text-third ";
  return (
    <button
      onClick={() => onPress(data.id)}
      class={
        border + "px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-500 text-sm"
      }
      style={{ backgroundColor: activeColor === data.id ? data.rgb : "" }}
    >
      {children}
    </button>
  );
};

export default ColorItem;
