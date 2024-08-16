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
import { Chart } from "react-google-charts";

export const data = [
  ["", "Diposit", "Withdraw"],
  ["Sat", 490, 225],
  ["Sun", 325, 110],
  ["Mon", 325, 290],
  ["Tue", 490, 390],
  ["Wed", 150, 220],
  ["Thu", 405, 250],
  ["Fri", 400, 310],
];

export const options = {
  colors: ["#1814F3", "#16DBCC"],
};

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
      <Item3>
        <div
          style={{
            backgroundColor: "white",
            flex: 1,
            maxWidth: "100%",
            padding: "30px",
            height: "320px",
            borderRadius: "20px",
          }}
        >
          <Chart
            chartType="Bar"
            data={data}
            options={options}
            width="100%"
            height="100%"
          />
        </div>
      </Item3>
      <Item4>item4</Item4>
      <Item5>
        <CardQuickTransfer />
      </Item5>
      <Item6>item6</Item6>
    </GridContainer>
  );
};

export default ContentHome;
