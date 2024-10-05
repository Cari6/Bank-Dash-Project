import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  max-width: 1300px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  grid-template-areas:
    "cards cards cards"
    "expense list list"
    "newCard newCard setting";
  @media (max-width: 1370px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "cards"
      "expense"
      "list"
      "newCard"
      "setting";
  }
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
  grid-area: expense;
`;
export const Item3 = styled.div`
  grid-area: list;
`;
export const Item4 = styled.div`
  grid-area: newCard;
`;
export const Item5 = styled.div`
  grid-area: setting;
`;

export const PieChartContainer = styled.div`
  padding: 15px;
  background-color: #fff;
  border-radius: 20px;
  height: 310px;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
`;
