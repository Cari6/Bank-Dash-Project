"use client";
import React from "react";
import {
  Cards,
  GridContainer,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
} from "./styles";
import CreditCard from "../credit-card";
import CardTransaction from "../card-transaction";
import CardQuickTransfer from "../card-quick-transfer";

const ContentHome = () => {
  return (
    <GridContainer>
      <Item1>
        <Cards>
          <CreditCard
            variant="variant1"
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
          <CreditCard
            variant="variant2"
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
        </Cards>
      </Item1>
      <Item2>
        <CardTransaction />
      </Item2>
      <Item3>item3</Item3>
      <Item4>item4</Item4>
      <Item5>
        <CardQuickTransfer />
      </Item5>
      <Item6>item6</Item6>
    </GridContainer>
  );
};

export default ContentHome;
