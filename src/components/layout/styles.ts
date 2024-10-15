import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ $isSidebarOpen: boolean }>`
  body {
    overflow: ${(props) => (props.$isSidebarOpen ? "hidden" : "auto")};
   
  }

   &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b1b1b1;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #1310bf;
  }
`;

export const MainContent = styled.main<{ $isOpen: boolean }>`
  margin-top: 100px;
  margin-left: 250px;
  padding: 40px;
  overflow-y: ${(props) => (props.$isOpen ? "hidden" : "auto")};

  @media (max-width: 1160px) {
    margin: 0;
    margin-top: 150px;
    padding: 40px;
  }

  @media (max-width: 400px) {
    padding: 40px 10px;
  }
`;

export const SideBarContainer = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0;

  @media (max-width: 1160px) {
    display: none;
  }
`;
