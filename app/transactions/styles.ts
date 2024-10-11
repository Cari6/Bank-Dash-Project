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
      margin: 0 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "cards cards"
    "expenses expenses"
    "transactions transactions"}

  
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
    max-width: 443px;
    flex-direction: column;
    align-items: center;
  }
`;
export const Item1 = styled.div`
  grid-area: cards;
  @media (max-width: 1490px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const Item2 = styled.div`
  grid-area: expenses;
  width: 420px;

  @media (max-width: 1490px) {
    width: 100%;
  }
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
