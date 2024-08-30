import { cardListItems } from "@/src/utils/constants";
import React from "react";
import ItemCardList from "./item-card-list";
import { CardContainer } from "./styles";

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
