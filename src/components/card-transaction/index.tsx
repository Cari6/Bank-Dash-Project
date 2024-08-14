"use client";
import React from "react";
import { cardTransactionItems } from "@/src/utils/constants";
import { CardTransactionContainer } from "./styles";
import ItemCardTransaction from "./item-card-transaction";

const CardTransaction = () => {
  return (
    <CardTransactionContainer>
      {cardTransactionItems.map((item, index) => (
        <ItemCardTransaction
          key={index}
          icon={item.icon}
          title={item.title}
          date={item.date}
          value={item.value}
        />
      ))}
    </CardTransactionContainer>
  );
};

export default CardTransaction;
