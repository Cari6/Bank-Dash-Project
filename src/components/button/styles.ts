import styled from "styled-components";

export const ButtonContainer = styled.div`
  background-color: #1814f3;
  border-radius: 15px;
  display: inline-flex;
  padding: 10px 20px;
  align-items: center;
  width: auto;
  height: auto;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0e0b97;
  }
`;
