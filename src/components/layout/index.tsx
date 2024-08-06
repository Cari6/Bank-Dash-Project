"use client";

import React, { ReactNode, useState } from "react";
import Header from "../header";
import { MainContent } from "./styles";
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
      <SideBar />
      <SideBarMobile isOpen={isSideBarOpen} />

      <Header />
      <HeaderMobile
        isSideBarOpen={isSideBarOpen}
        setSideBarOpen={handleClickSideBar}
      />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default Layout;
