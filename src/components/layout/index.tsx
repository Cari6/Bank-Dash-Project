"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Header from "../header";
import { MainContent, SideBarContainer, GlobalStyle } from "./styles";
import SideBar from "../side-bar";
import HeaderMobile from "../header-mobile";
import SideBarMobile from "../side-bar-mobile";
import { usePathname } from "next/navigation";

const keywords = [
  { path: "/", keyword: "dashboard" },
  { path: "/transactions", keyword: "transactions" },
  { path: "/accounts", keyword: "accounts" },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [itemActive, setItemActive] = useState<string>("dashboard");

  useEffect(() => {
    if (pathname) {
      const keyword = keywords.find((item) => item.path === pathname);
      if (keyword) {
        setItemActive(keyword.keyword);
      }
    }
  }, [pathname]);

  const handleClickSideBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  return (
    <div>
      <GlobalStyle isSidebarOpen={isSideBarOpen} />
      <SideBarContainer>
        <SideBar itemActive={itemActive} />
      </SideBarContainer>

      <SideBarMobile
        isOpen={isSideBarOpen}
        setSideBarOpen={handleClickSideBar}
        itemActive={itemActive}
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
