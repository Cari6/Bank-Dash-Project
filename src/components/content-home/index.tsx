"use client";
import React from "react";
import {
  FirstRow,
  GridContainer,
  Item1,
  Item2,
  Item4,
  Item5,
  Item6,
  Item7,
} from "./styles";
import CreditCard from "../credit-card";

const ContentHome = () => {
  return (
    <GridContainer>
      <Item1>
        <FirstRow>
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
        </FirstRow>
      </Item1>
      <Item2>
        <CreditCard
          variant="variant2"
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
        />
      </Item2>
      <Item4>item4</Item4>
      <Item5>item5</Item5>
      <Item6>item6</Item6>
      <Item7>item7</Item7>
    </GridContainer>
  );
};

export default ContentHome;
