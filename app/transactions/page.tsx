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
import { AddCard, CreditCard, Typography } from "@/src/components";
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
import Tabs from "@/src/components/tabs";
import TransactionsMobileTable from "@/src/components/table-mobile";
import { useCards } from "@/src/contexts/data-formCard/provider";

const TransactionsPage = () => {
  const { cards } = useCards();
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleActiveTab = (id: number) => {
    setActiveTab(id);
  };

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
            See All
          </Typography>
        </TitleCardContainer>
        <Cards>
          {cards.length === 0 ? (
            <Typography>No cards added yet.</Typography>
          ) : (
            cards
              .slice(0, 1)
              .map((card, index) => (
                <CreditCard
                  key={index}
                  variant={index % 2 === 0 ? "variant1" : "variant2"}
                  balance="$5,756"
                  cardHolder={card.nameOnCard}
                  validThru={card.expirationDate}
                  cardNumber={card.cardNumber}
                />
              ))
          )}
          <AddCard />
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
          onTabChange={handleActiveTab}
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
