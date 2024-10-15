import { cardListItems } from "@/src/utils/constants";
import React from "react";
import { CardContainer } from "./styles";
import ItemCardList from "./item-card-list";

const CardList = () => {
  return (
    <CardContainer>
      {cardListItems.map((item, index) => (
        <ItemCardList key={index} {...item} />
      ))}
    </CardContainer>
  );
};

export default CardList;
