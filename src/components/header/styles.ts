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
  

  @media (max-width: 1024px) {
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

export const HeaderMobileContainer = styled.div`
  margin: 25px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MenuIcon = styled.div`
  background-color: transparent;
`;

export const InputMobileContainer = styled.div`
  margin: 20px 0;
`;
