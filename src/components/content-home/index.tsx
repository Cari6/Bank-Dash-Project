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
        <Item2>item2</Item2>
      </FirstRow>
      {/* <CenterRow>
        <Item3>item3</Item3>
        <Item4>item4</Item4>
      </CenterRow>
      <LastRow>
        <Item5>item5</Item5>
        <Item6>item6</Item6>
      </LastRow> */}
    </GridContainer>
  );
};

export default ContentHome;
