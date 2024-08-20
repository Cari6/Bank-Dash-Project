import styled from "styled-components";

export const GridContainerTransactions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr)
  grid-template-rows:auto;
  gap:20px;
  grid-template-areas:
    "cards cards expenses"
    "transactions transactions transactions ";

    @media(max-width: 1490px){
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "cards cards"
    "expenses expenses"
    "transactions transactions"}

    // @media(max-width: 890px){
    // grid-template-columns: 1fr;
    // grid-template-areas:
    // "cards"
    // "expenses"
    // "transactions"
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
  //   background-color: red;
  grid-area: cards;
  @media (max-width: 1490px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
export const Item2 = styled.div`
  //   background-color: blue;
  grid-area: expenses;
`;
export const Item3 = styled.div`
  background-color: green;
  grid-area: transactions;
`;

export const ColumnChartContainer = styled.div`
  background-color: #fff;
  max-width: 100%;
  height: 230px;
  border-radius: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const TitleCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;
