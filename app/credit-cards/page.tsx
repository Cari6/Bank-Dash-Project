"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  Cards,
  GridContainer,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  PieChartContainer,
} from "./styles";
import {
  CardList,
  CreditCard,
  FormCard,
  SettingCard,
  Typography,
} from "@/src/components";
import {
  pieChartCreditCardsData,
  pieChartCreditCardsOptions,
} from "@/src/utils/charts-data";
import Chart from "react-google-charts";
import { formCreditCard } from "@/src/utils/constants";
const CreditCardsPage = () => {
  const settingCardRef = useRef<HTMLDivElement>(null);
  const [settingCardHeight, setSettingCardHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (settingCardRef.current) {
        setSettingCardHeight(settingCardRef.current.clientHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <GridContainer>
      <Item1>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          My Cards
        </Typography>
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
          <CreditCard
            variant="variant1"
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
        </Cards>
      </Item1>
      <Item2>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Card Expense Statistics
        </Typography>
        <PieChartContainer>
          <Chart
            chartType="PieChart"
            data={pieChartCreditCardsData}
            options={pieChartCreditCardsOptions}
            width="100%"
            height="100%"
          />
        </PieChartContainer>
      </Item2>
      <Item3>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Card List
        </Typography>
        <div style={{ height: 310 }}>
          <CardList />
        </div>
      </Item3>
      <Item4>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Add New Card
        </Typography>

        <FormCard
          height={`${settingCardHeight}px`}
          description="Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances"
          itemsForm={formCreditCard}
          titleButton="Add Card"
        />
      </Item4>
      <Item5>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Card Setting
        </Typography>
        <SettingCard ref={settingCardRef} />
      </Item5>
    </GridContainer>
  );
};

export default CreditCardsPage;
