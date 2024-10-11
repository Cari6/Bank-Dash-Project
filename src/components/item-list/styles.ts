import styled from "styled-components";

export const ItemlistContainer = styled.div<{ $disabled?: boolean }>`
  display: flex;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  height: 60px;
  padding-left: 40px;
  align-items: center;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
`;
