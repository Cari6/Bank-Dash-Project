import styled from "styled-components";

export const HeaderMobileContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 998;
  background-color: #fff;
  padding: 20px;
  height: 150px;
  @media (min-width: 1161px) {
    display: none;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputMobileContainer = styled.div`
  margin: 10px 0;
`;
