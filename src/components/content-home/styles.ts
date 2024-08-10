import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  max-width: 100%;
`;

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // height: 235px;
  gap: 20px;
  max-width: 100%;

  // @media (max-width: 1410px) {
  //   grid-template-columns: 1fr;
  // }
`;

export const CenterRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  // height: 367px;
  gap: 20px;
  max-width: 100%;

  // @media (max-width: 1024px) {
  //   grid-template-columns: 1fr;
  // }
`;

export const LastRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  // height: 323px;
  gap: 20px;
  max-width: 100%;

  // @media (max-width: 1024px) {
  //   grid-template-columns: 1fr;
  // }
`;
export const Item1 = styled.div`
  background-color: red;
  display: flex;
`;

export const Item2 = styled.div`
  background-color: yellow;
`;

export const Item3 = styled.div`
  background-color: blue;
`;

export const Item4 = styled.div`
  background-color: green;
`;

export const Item5 = styled.div`
  background-color: orange;
`;

export const Item6 = styled.div`
  background-color: purple;
`;

export const Item7 = styled.div`
  background-color: silver;
`;
