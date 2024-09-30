import Button from "@/src/components/button";
import { styled } from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: block;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;

  & > div {
    flex: 1 1 calc(50% - 8px);
  }

  @media (max-width: 890px) {
    & > div {
      flex: 1 1 100%;
    }
  }
`;

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

export const ContainerInner = styled.div`
  margin-bottom: 5px;
  position: relative;
`;
