import styled from "styled-components";
import { styles } from "../../typography/styles";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  // background-color: red;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const AvatarContainer = styled.div`
  width: 130px;
  height: 130px;
  position: relative;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const AvatarContainerMobile = styled.div`
  width: 170px;
  height: 170px;
  position: relative;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: block;
`;
