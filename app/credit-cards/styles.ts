import { Button } from "@/src/components";
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
  flex-wrap: wrap;
`;
export const Item1 = styled.div`
  // background-color: red;
  grid-area: cards;
`;
export const Item2 = styled.div`
  // background-color: blue;
  grid-area: expense;
`;
export const Item3 = styled.div`
  // background-color: yellow;
  grid-area: list;
`;
export const Item4 = styled.div`
  // background-color: orange;
  grid-area: newCard;
`;
export const Item5 = styled.div`
  // background-color: purple;
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
