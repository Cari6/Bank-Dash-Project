"use client";
import React, { useState } from "react";
import {
  Cards,
  ColumnChartContainer,
  GridContainerTransactions,
  Item1,
  Item2,
  Item3,
  TitleCardContainer,
  TransactionsMobileTableContainer,
  TransactionsTableContainer,
} from "./styles";
import { CreditCard, TableMobile, Typography } from "@/src/components";
import Chart from "react-google-charts";
import {
  columnChartTransactionsData,
  columnChartTransanctionsOptions,
} from "@/src/utils/charts-data";
import {
  renderTable,
  tabOptionsTransactions,
} from "@/src/utils/tabs-transactions";
import TransactionsTable from "@/src/components/table";
import Tabs from "@/src/components/tab-table";
import TransactionsMobileTable from "@/src/components/table-mobile";

const TransactionsPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

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

        <Tabs
          tabOptions={tabOptionsTransactions}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <TransactionsTableContainer>
          <TransactionsTable {...renderTable[activeTab]} />
        </TransactionsTableContainer>
        <TransactionsMobileTableContainer>
          <TransactionsMobileTable {...renderTable[activeTab]} />
        </TransactionsMobileTableContainer>
      </Item3>
    </GridContainerTransactions>
  );
};

export default TransactionsPage;
