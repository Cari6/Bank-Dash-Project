"use client";

import React from "react";

import Typography from "../typography";
import Input from "../input";
import IconButton from "../icon-button";
import Avatar from "../avatar";
import {
  ContainerRight,
  HeaderContainer,
  MenuIcon,
  TitleContainer,
  HeaderMobileContainer,
  InputMobileContainer,
  ContainerTop,
} from "./styles";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <TitleContainer>
          <Typography variant="h1">Overview</Typography>
        </TitleContainer>
        <ContainerRight>
          <Input
            placeholder="Search for something"
            icon="/assets/image/search.svg"
          />

          <IconButton url="/assets/image/setting-header.svg" />
          <IconButton url="/assets/image/notification.svg" />
          <Avatar url="/assets/image/avatar.svg" />
        </ContainerRight>
      </HeaderContainer>

      <HeaderMobileContainer>
        <ContainerTop>
          <MenuIcon>
            <IconButton
              url="/assets/image/menu-icon.svg"
              style={{ backgroundColor: "transparent" }}
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
    </div>
  );
};

export default Header;
