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
  InputContainer,
  HeaderContainer2,
  MenuIcon2,
  TitleContainer2,
  ContainerRight2,
} from "./Header.styled";

const Header: React.FC = () => {
  return (
    <div>
      <HeaderContainer>
        <MenuIcon>
          <IconButton
            url="/assets/image/menu-icon.svg"
            style={{ backgroundColor: "transparent" }}
          />
        </MenuIcon>
        <TitleContainer>
          <Typography variant="h1">Overview</Typography>
        </TitleContainer>
        <ContainerRight>
          <InputContainer>
            <Input
              placeholder="Search for something"
              icon="/assets/image/search.svg"
            />
          </InputContainer>
          <IconButton url="/assets/image/setting-header.svg" />
          <IconButton url="/assets/image/notification.svg" />
          <Avatar url="/assets/image/avatar.svg" />
        </ContainerRight>
      </HeaderContainer>

      {/* <HeaderContainer2>
        <MenuIcon2>
          <IconButton
            url="/assets/image/menu-icon.svg"
            style={{ backgroundColor: "transparent" }}
          />
        </MenuIcon2>
        <TitleContainer2>
          <Typography variant="h1">Overview</Typography>
        </TitleContainer2>
        <ContainerRight2>
          <InputContainer>
            <Input
              placeholder="Search for something"
              icon="/assets/image/search.svg"
            />
          </InputContainer>
          <IconButton url="/assets/image/setting-header.svg" />
          <IconButton url="/assets/image/notification.svg" />
          <Avatar url="/assets/image/avatar.svg" />
        </ContainerRight2>
      </HeaderContainer2> */}
    </div>
  );
};

export default Header;
