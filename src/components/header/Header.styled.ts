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
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
  display: none;}

  
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

export const MenuIcon = styled.div`
  background-color: transparent;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const HeaderContainer2 = styled.header`
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
  transition: all 0.3s ease;
  @media (max-width: 1024px) {
  display: block;}

  
}`;

export const TitleContainer2 = styled.div`
  margin-left: 40px;
`;

export const ContainerRight2 = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-right: 40px;
`;

export const MenuIcon2 = styled.div`
  background-color: transparent;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const InputContainer = styled.div``;
