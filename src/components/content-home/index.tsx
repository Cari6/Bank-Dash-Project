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
          <CreditCard />
        </Item1>
        <Item2>
          <CreditCard />
        </Item2>
        <Item3>
          <CreditCard />
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
