import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 250px);
  height: 100px;
  top: 0;
  left: 250px;
  z-index: 1000;

  @media (max-width: 1000px) {
 left:0;
 display:none;
  }
  
}`;

export const TitleContainer = styled.div`
  margin-left: 40px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-right: 40px;
`;
