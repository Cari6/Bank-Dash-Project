"use client";

import React, { ReactNode, useState } from "react";
import Header from "../header";
import { MainContent, SideBarContainer, GlobalStyle } from "./styles";
import SideBar from "../side-bar";
import HeaderMobile from "../header-mobile";
import SideBarMobile from "../side-bar-mobile";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const handleClickSideBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  return (
    <div>
      <GlobalStyle isSidebarOpen={isSideBarOpen} />
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>

      <SideBarMobile
        isOpen={isSideBarOpen}
        setSideBarOpen={handleClickSideBar}
      />

      <Header />
      <HeaderMobile
        isSideBarOpen={isSideBarOpen}
        setSideBarOpen={handleClickSideBar}
      />
      <MainContent isOpen={isSideBarOpen}>{children}</MainContent>
    </div>
  );
};

export default Layout;
