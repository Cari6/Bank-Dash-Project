"use client";
import React from "react";
import Sidebar from "../side-bar";
import { SideBarContainer, Overlay, Container } from "./styles";

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
  console.log("isOpen", isOpen);
  return (
    <Overlay onClick={setSideBarOpen} $isOpen={isOpen}>
      <Container $isOpen={isOpen}>
        <SideBarContainer>
          <Sidebar onItemClick={setSideBarOpen} itemActive={itemActive} />
        </SideBarContainer>
      </Container>
    </Overlay>
  );
};

export default SideBarMobile;
