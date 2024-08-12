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
  padding: 20px;
  background-color: red;
  @media (max-width: 1490px) {
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

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // height: 235px;
  gap: 20px;

  @media (max-width: 1490px) {
    grid-template-columns: 1fr;
  }
`;

export const CenterRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  // height: 367px;
  gap: 20px;
  max-width: 100%;

  @media (max-width: 1490px) {
    grid-template-columns: 1fr;
  }
`;

export const LastRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  // height: 323px;
  gap: 20px;
  max-width: 100%;

  @media (max-width: 1490px) {
    grid-template-columns: 1fr;
  }
`;
export const Item1 = styled.div`
  grid-area: cards;
  background-color: red;
  @media (max-width: 1490px) {
    display: flex;
    justify-content: center;
  }
`;

export const Item2 = styled.div`
  grid-area: transactions;
  background-color: yellow;
  @media (max-width: 1490px) {
    display: flex;
    justify-content: center;
  }
`;

export const Item3 = styled.div`
  background-color: blue;
  @media (max-width: 1490px) {
    display: flex;
    justify-content: center;
  }
`;

export const Item4 = styled.div`
  grid-area: activity;
  background-color: green;
  @media (max-width: 1490px) {
    display: flex;
    justify-content: center;
  }
`;

export const Item5 = styled.div`
  grid-area: statistics;
  background-color: orange;
  @media (max-width: 1490px) {
    display: flex;
    justify-content: center;
  }
`;

export const Item6 = styled.div`
  grid-area: transfer;
  background-color: purple;
  @media (max-width: 1490px) {
    display: flex;
    justify-content: center;
  }
`;

export const Item7 = styled.div`
  grid-area: history;
  background-color: silver;
  @media (max-width: 1490px) {
    display: flex;
    justify-content: center;
  }
`;
