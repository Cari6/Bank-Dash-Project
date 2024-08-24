import styled, { css } from "styled-components";

const defaultStyles = css`
  background-color: #1814f3;
  border-radius: 15px;
  border: none;
  color: #fff;

  &:hover {
    background-color: #0e0b97;
  }
`;

const outlineStyles = css`
  background-color: #fff;
  border-radius: 25px;
  border: 2px solid #0e0b97;
  color: #0e0b97;

  &:hover {
    background-color: #e6eff5;
  }
`;

export const ButtonContainer = styled.div<{ variant: "default" | "outline" }>`
  display: inline-flex;
  padding: 10px 20px;
  align-items: center;
  width: auto;
  height: auto;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ variant }) => (variant === "outline" ? outlineStyles : defaultStyles)}
`;
