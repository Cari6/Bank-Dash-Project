import { cardListItems } from "@/src/utils/constants";
import React from "react";
import ItemCardList from "./item-card-list";
import { CardContainer } from "./styles";

const CardList = () => {
  return (
    <CardContainer>
      {cardListItems.map((item, index) => (
        <ItemCardList
          key={index}
          url={item.url}
          cardType={item.cardType}
          bankName={item.bankName}
          cardNumber={item.cardNumber}
          name={item.name}
        />
      ))}
    </CardContainer>
  );
};

export default CardList;
