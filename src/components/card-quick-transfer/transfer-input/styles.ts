"use client";
import styled from "styled-components";
import Button from "../../button";
import Input from "../../input";

export const TransferInputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;
export const InputButton = styled.div`
  display: flex;
`;

export const CustomInput = styled(Input)`
  width: 70px;
  padding-right: 20px;
`;
export const CustomButton = styled(Button)`
  border-radius: 50px;
  height: 40px;
  margin-left: -30px;
  right: 0;
  top: 0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0e0b97;
  }
`;