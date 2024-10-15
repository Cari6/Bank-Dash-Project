"use client";
import React, { useState } from "react";
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
  NoExistingCard,
  PieChartContainer,
  TitleCardContainer,
} from "./styles";
import {
  AddCard,
  CardQuickTransfer,
  CardTransaction,
  CreditCard,
  ModalCreditCards,
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
import { useCards } from "@/src/contexts/data-form-card/provider";
import useModalScroll from "@/src/hooks/modal-scroll";

const Home = () => {
  const { cards } = useCards();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useModalScroll(isModalOpen);
  return (
    <GridContainer>
      <Item1>
        <TitleCardContainer>
          <Typography variant="title1" style={{ margin: 0 }}>
            My Cards
          </Typography>
          {cards.length > 0 && (
            <Typography
              variant="title1"
              style={{
                margin: 0,
                fontSize: 16,
                cursor: "pointer",
                alignSelf: "end",
              }}
              onClick={handleOpenModal}
            >
              See All
            </Typography>
          )}

          {isModalOpen && <ModalCreditCards onClose={handleCloseModal} />}
        </TitleCardContainer>
        <Cards>
          {cards.length === 0 ? (
            <NoExistingCard>
              <Typography>No cards added yet.</Typography>
            </NoExistingCard>
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
            options={pieChartDashboardOptions}
            max-width="100%"
            height="100%"
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
