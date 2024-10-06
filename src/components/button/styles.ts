import styled, { css } from "styled-components";
export const ButtonContainer = styled.button<{
  $variant: "default" | "outline" | "form";
}>`
  display: inline-flex;
  justify-content: center;
  padding: 10px 20px;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  width: auto;
  height: auto;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ $variant }) =>
    $variant === "outline"
      ? outlineStyles
      : $variant === "form"
      ? formStyles
      : defaultStyles}
`;

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

const formStyles = css`
  background-color: #1814f3;
  border-radius: 9px;
  border: none;
  color: #fff;
  width: 190px;

  &:hover {
    background-color: #0e0b97;
  }
`;
