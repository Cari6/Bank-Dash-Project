import styled from "styled-components";

export const GridContainerTransactions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr)
  grid-template-rows:auto;
  gap:20px;
  max-width: 1300px;
  grid-template-areas:
    "cards cards expenses"
    "transactions transactions transactions ";

    @media(max-width: 1490px){
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "cards cards"
    "expenses expenses"
    "transactions transactions"}

  
`;

export const Cards = styled.div`
  display: flex;
  gap: 20px;
`;
export const Item1 = styled.div`
  grid-area: cards;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;
  width: 100%;

  & > * {
    flex: 0 0 auto;
    min-width: 360px;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b1b1b1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;
export const Item2 = styled.div`
  grid-area: expenses;
`;
export const Item3 = styled.div`
  grid-area: transactions;
`;

export const ColumnChartContainer = styled.div`
  background-color: #fff;
  height: 230px;
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 15px;
  max-width: 49%;

  @media (max-width: 890px) {
    padding-left: 50px;
    max-width: inherit;
  }
  @media (min-width: 1490px) {
    padding-left: 50px;
    max-width: inherit;
  }
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
