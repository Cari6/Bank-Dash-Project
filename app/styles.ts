import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  max-width: 1300px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "cards cards transactions"
    "activity activity statistics"
    "transfer history history";
  gap: 20px;
  @media (max-width: 1490px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "cards cards"
      "transactions transactions"
      "activity activity"
      "statistics transfer"
      "history history";
  }

  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "cards"
      "transactions"
      "activity"
      "statistics"
      "transfer"
      "history";
  }
`;

export const Cards = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  @media (max-width: 1490px) {
    display: flex;
    justify-content: start;
  }
  @media (max-width: 890px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NoExistingCard = styled.div`
  width: 100%;
  max-width: 360px;
  height: 229.2px;
`;

export const Item1 = styled.div`
  grid-area: cards;
`;

export const Item2 = styled.div`
  grid-area: transactions;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Item3 = styled.div`
  grid-area: activity;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Item4 = styled.div`
  grid-area: statistics;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Item5 = styled.div`
  grid-area: transfer;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Item6 = styled.div`
  grid-area: history;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const BarChartContainer = styled.div`
  background-color: #fff;
  flex: 1;
  width: 100%;
  padding: 30px;
  height: 320px;
  border-radius: 20px;
`;

export const PieChartContainer = styled.div`
  background-color: #fff;
  flex: 1;
  width: 100%;
  padding: 10px;
  height: 320px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const LineChartContainer = styled.div`
  background-color: #fff;
  flex: 1;
  width: 100%;
  padding: 10px;
  height: 280px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;
