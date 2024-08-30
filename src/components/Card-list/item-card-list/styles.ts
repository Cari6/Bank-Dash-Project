import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  display: flex;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  gap: 10px;
`;

export const CardType = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemMobile = styled.div`
  @media (min-width: 1420px) {
    display: block;
  }
`;

export const CardItem = styled.div`
  @media (max-width: 1420px) {
    display: none;
  }
`;
