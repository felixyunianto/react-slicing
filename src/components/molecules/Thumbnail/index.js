import React from "react";

const Thumbnail = (props) => {
    const {children} = props
  return (
      <div className="w-1/2 flex justify-center items-center hidden laptop:block desktop:block">
        {children}
      </div>
  );
};

export default Thumbnail;
