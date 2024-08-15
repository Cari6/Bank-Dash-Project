import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const TextValue = styled.div<{ isNegative: boolean }>`
  color: ${(props) => (props.isNegative ? "#FF4B4A" : "#41D4A8")};
  font-size: 16px;
  font-weight: 500;
`;
