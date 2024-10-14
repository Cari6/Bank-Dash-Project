import styled from "styled-components";

export const SideBarContainer = styled.div<{ $isOpen: boolean }>`
  left: ${(props) => (props.$isOpen ? "0px" : "-250px")};
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  position: fixed;
  top: 0;

  @media (min-width: 1161px) {
    display: none;
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: 999;
`;
