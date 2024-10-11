import styled from "styled-components";

export const Container = styled.div<{ $isOpen: boolean }>`
  background: #fff;
  width: 250px;
  position: fixed;
  top: 0;
  left: ${(props) => (props.$isOpen ? "0px" : "-250px")};
  bottom: 0;
  z-index: 1000;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100vh;
  transition: left 0.3s ease-in-out;
`;

export const SideBarContainer = styled.div`
  position: relative;
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
