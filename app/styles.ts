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
    margin: 0 40px;
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

  @media (max-width: 570px) {
    margin: 0;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 1490px) {
    width: 100%;
  }

  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    max-width: 443px;
  }
`;

export const Item1 = styled.div`
  grid-area: cards;

  // background-color: red;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Item2 = styled.div`
  grid-area: transactions;
  // background-color: #fff;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Item3 = styled.div`
  grid-area: activity;
  // background-color: blue;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  }
`;

export const Item4 = styled.div`
  grid-area: statistics;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  }
`;

export const Item5 = styled.div`
  grid-area: transfer;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  }
`;

export const Item6 = styled.div`
  grid-area: history;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  }
`;

export const BarChartContainer = styled.div`
  background-color: #fff;
  flex: 1;
  max-width: 100%;
  padding: 30px;
  height: 320px;
  border-radius: 20px;
`;

export const PieChartContainer = styled.div`
  background-color: #fff;
  flex: 1;
  max-width: 100%;
  padding: 10px;
  height: 320px;
  border-radius: 20px;
  display: flex;
`;

export const LineChartContainer = styled.div`
  background-color: #fff;
  flex: 1;
  max-width: 100%;
  padding: 10px;
  height: 280px;
  border-radius: 20px;
  display: flex;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;
