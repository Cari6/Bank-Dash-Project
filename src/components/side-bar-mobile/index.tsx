"use client";
import React from "react";
import Sidebar from "../side-bar";
import { SideBarContainer, SideBarMobileContainer } from "./styles";

const SideBarMobile = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <SideBarMobileContainer
      style={{
        visibility: isOpen ? "visible" : "hidden",
        opacity: isOpen ? 1 : 0,
        transition: "opacity 0.3s ease, visibility 0.3s ease",
      }}
    >
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>
    </SideBarMobileContainer>
  );
};

export default SideBarMobile;
/* overlay */
