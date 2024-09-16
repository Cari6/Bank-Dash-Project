import styled from "styled-components";
import Button from "../../button";

export const Container = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const CustomButton = styled(Button)`
  @media (max-width: 890px) {
    width: 100%;
  }
`;
