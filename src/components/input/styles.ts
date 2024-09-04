import styled, { css } from "styled-components";

interface InputContainerProps {
  variant: "default" | "variant1";
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0px 20px;
  background-color: #f5f7fa;
  border-radius: 25px;
  transition: box-shadow 0.3s;
  ${(props) =>
    props.variant === "variant1" &&
    css`
      background-color: #fff;
      border-radius: 15px;
      border: 1px solid #dfeaf2;
    `}
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  min-width: 0;
  max-width: 150px;
  flex: 1;
  margin-left: 10px;

  &::placeholder {
    color: #8ba3cb;
  }
`;
