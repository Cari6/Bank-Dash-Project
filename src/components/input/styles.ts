import styled, { css } from "styled-components";

interface InputContainerProps {
  variant: "default" | "variant1";
  isWidthIcon?: boolean;
}

export const Container = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  height: 50px;

  background-color: #f5f7fa;
  border-radius: 25px;

  ${(props) =>
    props.variant === "variant1" &&
    css`
      background-color: #fff;
      border-radius: 15px;
      border: 1px solid #dfeaf2;
    `}

  ${(props) =>
    css`
      padding: ${props.isWidthIcon ? " 0px 20px" : " 0px 5px"};
    `}
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  flex: 1;
  margin: 0 10px;

  &::placeholder {
    color: #8ba3cb;
  }
`;
