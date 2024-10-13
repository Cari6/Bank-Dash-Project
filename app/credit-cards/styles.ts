import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  max-width: 1300px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  // grid-template-areas:
  //   "cards cards cards"
  //   "expense list list"
  //   "newCard newCard setting";

  grid-template-areas:
    "cards cards expense"
    "list list list"
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
  height: 230px;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;
