"use client";
import React from "react";
import {
  Cards,
  ColumnChartContainer,
  GridContainerTransactions,
  Item1,
  Item2,
  Item3,
  TitleCardContainer,
} from "./styles";
import {
  CreditCard,
  TableMobile,
  TabTable,
  Typography,
} from "@/src/components";
import Chart from "react-google-charts";
import {
  columnChartTransactionsData,
  columnChartTransanctionsOptions,
} from "@/src/utils/charts-data";

const TransactionsPage = () => {
  return (
    <GridContainerTransactions>
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
            + Add Card
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
          My Expense
        </Typography>

        <ColumnChartContainer>
          <Chart
            chartType="ColumnChart"
            data={columnChartTransactionsData}
            options={columnChartTransanctionsOptions}
            width="100%"
            height="100%"
          />
        </ColumnChartContainer>
      </Item2>
      <Item3>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Recent Transactions
        </Typography>
        {/* <TableMobile /> */}
        <TabTable />
      </Item3>
    </GridContainerTransactions>
  );
};

export default TransactionsPage;
