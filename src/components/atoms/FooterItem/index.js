import React from "react";

const FooterItem = (props) => {
  const { title, data, titleClass, className } = props;
  return (
    <div className={className}>
      <h1 className={titleClass}>{title}</h1>
      <div className={title ? "mt-4" : "mt-10"}>
        {data &&
          data.map((item) => {
            return <h1>{item}</h1>;
          })}
      </div>
    </div>
  );
};

export default FooterItem;
