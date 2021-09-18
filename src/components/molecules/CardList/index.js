import React from "react";
import { Card } from "../..";

const CardList = (props) => {
  const { data } = props;
  return (
    <div className="my-4 grid grid-cols-2 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 desktop:grid-cols-5 gap-4">
        {data.slice(0,10).map((item) => {
            return  <Card item={item}/>
        })}
    </div>
  );
};

export default CardList;
