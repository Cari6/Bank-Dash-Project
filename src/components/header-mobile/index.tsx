"use client";
import React from "react";
import {
  ContainerTop,
  HeaderMobileContainer,
  InputMobileContainer,
  MenuIcon,
} from "./styles";
import IconButton from "../icon-button";
import Typography from "../typography";
import Avatar from "../avatar";
import Input from "../input";

const HeaderMobile = ({ isSideBarOpen, setSideBarOpen }: any) => {
  return (
    <HeaderMobileContainer>
      <ContainerTop>
        <MenuIcon>
          <IconButton
            url="/assets/image/menu-icon.svg"
            style={{ backgroundColor: "transparent" }}
            onClick={() => setSideBarOpen(!isSideBarOpen)}
          />
        </MenuIcon>

        <Typography variant="h1">Overview</Typography>

        <Avatar url="/assets/image/avatar.svg" />
      </ContainerTop>
      <InputMobileContainer>
        <Input
          placeholder="Search for something"
          icon="/assets/image/search.svg"
        />
      </InputMobileContainer>
    </HeaderMobileContainer>
  );
};

export default HeaderMobile;
