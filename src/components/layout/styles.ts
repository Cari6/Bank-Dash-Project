import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ isSidebarOpen: boolean }>`
  body {
    overflow: ${(props) => (props.isSidebarOpen ? "hidden" : "auto")};
  }
`;

export const MainContent = styled.main<{ isOpen: boolean }>`
  margin-top: 100px;
  margin-left: 250px;
  padding: 40px;
  overflow-y: ${(props) => (props.isOpen ? "hidden" : "auto")};

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const SideBarContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
