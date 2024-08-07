"use client";
import React from "react";
import Sidebar from "../side-bar";
import { SideBarContainer, Overlay, Container } from "./styles";

interface SideBarMobileProps {
  isOpen: boolean;
  setSideBarOpen: () => void;
}

const SideBarMobile = ({ isOpen, setSideBarOpen }: SideBarMobileProps) => {
  return (
    <>
      <Container isOpen={isOpen}>
        <SideBarContainer>
          <Sidebar />
        </SideBarContainer>
      </Container>
      <Overlay onClick={setSideBarOpen} isOpen={isOpen} />
    </>
  );
};

export default SideBarMobile;
