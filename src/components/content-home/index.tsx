"use client";
import React from "react";
import {
  CenterRow,
  FirstRow,
  GridContainer,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  LastRow,
} from "./styles";
import CreditCard from "../credit-card";

const ContentHome = () => {
  return (
    <GridContainer>
      <FirstRow>
        <Item1>
          <CreditCard
            variant="variant1"
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
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
        <Item3>
          <CreditCard
            variant="variant2"
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
        </Item3>
      </FirstRow>
      <CenterRow>
        <Item4>item4</Item4>
        <Item5>item5</Item5>
      </CenterRow>
      <LastRow>
        <Item6>item6</Item6>
        <Item7>item7</Item7>
      </LastRow>
    </GridContainer>
  );
};

export default ContentHome;
