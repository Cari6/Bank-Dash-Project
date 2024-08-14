"use client";
import React from "react";
import Typography from "../typography";
import Input from "../input";
import IconButton from "../icon-button";
import Avatar from "../avatar";
import { ContainerRight, HeaderContainer, TitleContainer } from "./styles";

const Header = () => {
  return (
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
  );
};

export default Header;
