import styled from "styled-components";

export interface CardContainerProps {
  variant: "variant1" | "variant2";
}

export const CardContainer = styled.div<CardContainerProps>`
  max-width: 400px;
  min-width: 360px;
  padding: 20px;
  border-radius: 25px;
  flex: 1;

  ${(props) =>
    props.variant === "variant1" &&
    `
      background: linear-gradient(
        to bottom,
        #0a06f4 0%,
        #0a06f4 66%,
        #4c49ed 66%,
        #0a06fa 100%
      );
      color: #fff;
    `}

  ${(props) =>
    props.variant === "variant2" &&
    `
      background: linear-gradient(
        to bottom,
        #fff 0%,
        #fff 66%,
        #dfeaf2 67%,
        #fff 67%,
        #fff 100%
      );
      color: #343c6a;
    `}
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0;
`;
export const CenterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

export const CardHolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ValidContainer = styled.div``;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
