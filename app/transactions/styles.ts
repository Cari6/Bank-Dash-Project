import styled from "styled-components";

export const GridContainerTransactions = styled.div`
  display: grid;
  max-width: 1300px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;

  grid-template-areas:
    "cards cards expenses"
    "transactions transactions transactions ";

  @media (max-width: 1490px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "cards"
      "expenses"
      "transactions";
  }
`;

export const Cards = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1490px) {
    width: 100%;
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
  grid-area: expenses;
`;

export const Item3 = styled.div`
  grid-area: transactions;
`;

export const ColumnChartContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
`;

export const ColumnChartContainerInner = styled.div`
  border-radius: 20px;
  height: 230px;
  overflow: hidden;
  padding-bottom: 15px;
  width: 100%;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

export const TransactionsTableContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const TransactionsMobileTableContainer = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;
