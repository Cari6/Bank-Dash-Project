"use client";
import React from "react";
import Sidebar from "../side-bar";
import {
  SideBarContainer,
  SideBarMobileContainer,
  Overlay,
  Container,
} from "./styles";

const SideBarMobile = ({
  isOpen,
  setSideBarOpen,
}: {
  isOpen: boolean;
  setSideBarOpen: () => void;
}) => {
  console.log("isOpen", isOpen);
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
/* overlay */
