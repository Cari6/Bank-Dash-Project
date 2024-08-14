"use client";
import styled from "styled-components";
import Button from "../../button";

export const TransferInputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const InputButton = styled.div`
  position: relative;
  width: 100%;
`;
export const CustomButton = styled(Button)`
  border-radius: 50px;
  height: 40px;
  position: absolute;
  right: 0;
  top: 0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0e0b97;
  }
`;
