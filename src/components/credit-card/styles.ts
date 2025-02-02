import styled from "styled-components";
import IconButton from "../icon-button";

export interface CardContainerProps {
  $variant: "variant1" | "variant2";
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  max-width: 360px;
  padding: 20px;
  border-radius: 25px;
  position: relative;

  ${(props) =>
    props.$variant === "variant1" &&
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
    props.$variant === "variant2" &&
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

export const CustomIconButton = styled(IconButton)`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
