"use client";
import styled from "styled-components";
import Button from "../../button";
import Input from "../../input";

export const TransferInputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
export const InputButton = styled.div`
  display: flex;
  align-items: center;
  z-index: 996;
`;

export const CustomInput = styled(Input)`
  width: 100px;
  padding-right: 20px;
`;
export const CustomButton = styled(Button)`
  border-radius: 50px;
  height: 50px;
  margin-left: -30px;
  z-index: 997;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0e0b97;
  }
`;
