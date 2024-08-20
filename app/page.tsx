"use client";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import {
  BarChartContainer,
  Cards,
  GridContainer,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  LineChartContainer,
  PieChartContainer,
  TitleCardContainer,
} from "./styles";
import {
  CardQuickTransfer,
  CardTransaction,
  CreditCard,
  Typography,
} from "@/src/components";
import {
  barChartDashboardData,
  barChartDashboardOptions,
  lineChartDashboardData,
  lineChartDashboardOptions,
  pieChartDashboardData,
  pieChartDashboardOptions,
} from "@/src/utils/charts-data";

export const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < 890
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 890);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };
  }, []);

  return (
    <GridContainer>
      <Item1>
        <TitleCardContainer>
          <Typography variant="title1" style={{ margin: 0 }}>
            My Cards
          </Typography>
          <Typography
            variant="title1"
            style={{
              margin: 0,
              fontSize: 16,
              cursor: "pointer",
              alignSelf: "end",
            }}
          >
            See All
          </Typography>
        </TitleCardContainer>
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
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Recent Transactions
        </Typography>
        <CardTransaction />
      </Item2>
      <Item3>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20 }}
        >
          Weekly Activity
        </Typography>
        <BarChartContainer>
          <Chart
            chartType="Bar"
            data={barChartDashboardData}
            options={barChartDashboardOptions}
            width="100%"
            height="100%"
          />
        </BarChartContainer>
      </Item3>
      <Item4>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20 }}
        >
          Expense Statistics
        </Typography>
        <PieChartContainer>
          <Chart
            chartType="PieChart"
            data={pieChartDashboardData}
            options={pieChartDashboardOptions(isSmallScreen)}
            max-width="100%"
            height="100%"
            key={`chart-${isSmallScreen}`}
          />
        </PieChartContainer>
      </Item4>
      <Item5>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20 }}
        >
          Quick Transfer
        </Typography>
        <CardQuickTransfer />
      </Item5>
      <Item6>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20 }}
        >
          Balance History
        </Typography>
        <LineChartContainer>
          <Chart
            chartType="LineChart"
            data={lineChartDashboardData}
            options={lineChartDashboardOptions}
            width="100%"
            height="100%"
          />
        </LineChartContainer>
      </Item6>
    </GridContainer>
  );
};

export default Home;
