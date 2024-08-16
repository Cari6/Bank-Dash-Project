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
} from "./styles";
import {
  CardQuickTransfer,
  CardTransaction,
  CreditCard,
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
    window.innerWidth < 1490
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1490);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };
  }, []);

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
        <PieChartContainer>
          <Chart
            chartType="PieChart"
            data={pieChartDashboardData}
            options={pieChartDashboardOptions(isSmallScreen)}
            width="100%"
            height="100%"
            key={`chart-${isSmallScreen}`}
          />
        </PieChartContainer>
      </Item4>
      <Item5>
        <CardQuickTransfer />
      </Item5>
      <Item6>
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
