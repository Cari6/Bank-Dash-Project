"use client";

import React, { ReactNode } from "react";
import Header from "../header";
import { MainContent } from "./styles";
import SideBar from "../sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SideBar />
      {/* <SideBarMobile /> */}
      <Header />
      {/* <HeaderMobile /> */}
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default Layout;
