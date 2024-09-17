import styled from "styled-components";
import Button from "../../button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerTop = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 890px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const AvatarContainer = styled.div`
  width: 130px;
  height: 130px;
  position: relative;

  @media (max-width: 890px) {
    display: none;
  }
`;

export const AvatarContainerMobile = styled.div`
  width: 170px;
  height: 170px;
  position: relative;

  @media (min-width: 890px) {
    display: none;
  }
`;
