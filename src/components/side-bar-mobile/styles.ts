import styled from "styled-components";

export const Container = styled.div<{ $isOpen: boolean }>`
  background: #fff;
  width: 250px;
  position: absolute;
  top: 0;
  left: -250px;
  bottom: 0;
  z-index: 1000;
  display: flex;
  overflow-y: auto;
  max-height: 100vh;
  transform: ${(props) =>
    props.$isOpen ? "translateX(250px)" : "translateX(0)"};
  transition: transform 0.3s ease-in-out;
`;

export const SideBarContainer = styled.div`
  position: relative;
  flex: 1;
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$isOpen ? "inherit" : "none")};
  z-index: 999;
`;
