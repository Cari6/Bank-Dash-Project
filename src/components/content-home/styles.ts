import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 30px;
  justify-content: center;
`;

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 770px 390px;
  height: 235px;
  gap: 30px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const CenterRow = styled.div`
  display: grid;
  grid-template-columns: 770px 390px;
  height: 367px;
  gap: 30px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const LastRow = styled.div`
  display: grid;
  grid-template-columns: 485px 675px;
  height: 323px;
  gap: 30px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const Item1 = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
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
