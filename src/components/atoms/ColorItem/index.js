import React from "react";

const ColorItem = (props) => {
  const { activeColor, data, children, onPress } = props;
  const border =
    activeColor === data.id ? "border-0 " : "border-2 border-third text-third ";
  return (
    <button
      onClick={() => onPress(data.id)}
      class={border + "px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-400 text-sm"}
      style={{ backgroundColor: activeColor === data.id ? data.rgb : "" }}
    >
      {children}
    </button>
  );
};

export default ColorItem;
