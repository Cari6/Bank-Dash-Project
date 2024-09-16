import { styled } from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: block;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  & > div {
    flex: 1 1 calc(50% - 8px);
  }

  @media (max-width: 890px) {
    & > div {
      flex: 1 1 100%;
    }
  }
`;
export const Item = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
`;
