"use client";
import React from "react";
import Sidebar from "../side-bar";
import { SideBarContainer, Overlay } from "./styles";

interface SideBarMobileProps {
  isOpen: boolean;
  setSideBarOpen: () => void;
  itemActive?: string;
}

const SideBarMobile = ({
  isOpen,
  setSideBarOpen,
  itemActive,
}: SideBarMobileProps) => {
  return (
    <>
      <Overlay onClick={setSideBarOpen} $isOpen={isOpen} />
      <SideBarContainer $isOpen={isOpen}>
        <Sidebar onItemClick={setSideBarOpen} itemActive={itemActive} />
      </SideBarContainer>
    </>
  );
};

export default SideBarMobile;
