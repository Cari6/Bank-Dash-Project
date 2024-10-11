"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  CardContainer,
  Cards,
  GridContainer,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  PieChartContainer,
  TitleCardContainer,
} from "./styles";
import {
  CardList,
  CreditCard,
  FormCard,
  ModalCreditCards,
  SettingCard,
  Typography,
} from "@/src/components";
import {
  pieChartCreditCardsData,
  pieChartCreditCardsOptions,
} from "@/src/utils/charts-data";
import Chart from "react-google-charts";
import { useCards } from "@/src/contexts/data-formCard/provider";
import { useSearchParams } from "next/navigation";
import useModalScroll from "@/src/hooks/modal-scroll";

const CreditCardsPage = () => {
  const { cards } = useCards();
  const settingCardRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [settingCardHeight, setSettingCardHeight] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  useModalScroll(isModalOpen);
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

  useEffect(() => {
    const focusForm = searchParams.get("focusForm");
    if (focusForm === "true") {
      formCardRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <GridContainer>
      <Item1>
        {cards.length > 0 && (
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
              onClick={handleOpenModal}
            >
              See All
            </Typography>
            {isModalOpen && (
              <ModalCreditCards onClose={handleCloseModal} onDelete={true} />
            )}
          </TitleCardContainer>
        )}

        <Cards>
          {cards.slice(0, 3).map((card, index) => (
            <CreditCard
              key={index}
              variant={index % 2 === 0 ? "variant1" : "variant2"}
              balance="$5,756"
              cardHolder={card.nameOnCard}
              validThru={card.expirationDate}
              cardNumber={card.cardNumber}
              showDeleteButton={false}
            />
          ))}
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
      <Item4 ref={formCardRef}>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Add New Card
        </Typography>
        <CardContainer style={{ minHeight: `${settingCardHeight}px` }}>
          <FormCard />
        </CardContainer>
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
