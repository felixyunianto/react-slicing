import React from "react";
import { Card } from "../..";

const CardList = (props) => {
  const { data, onPress } = props;
  return (
    <div className="my-4 grid grid-cols-2 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 desktop:grid-cols-5 gap-4">
        {data.map((item) => {
            return  <Card item={item} key={item.id} onPress={(data) => onPress(data)}/>
        })}
    </div>
  );
};

export default CardList;
