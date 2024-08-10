"use client";

import React from "react";
import { LogoIcon } from "../icons";
import ItemList from "../item-list";
import {
  ItemListContainer,
  Logo,
  SideBarContainer,
  StyledLink,
} from "./styles";
import { sidebarItems } from "@/src/utils/constants";

interface SideBarProps {
  onItemClick: () => void;
}

const SideBar = ({ onItemClick }: SideBarProps) => {
  return (
    <SideBarContainer>
      <Logo>
        <LogoIcon />
      </Logo>
      <ItemListContainer>
        {sidebarItems.map(({ iconName, title, route }) => (
          <StyledLink href={route} key={iconName} onClick={onItemClick}>
            <ItemList iconName={iconName} title={title} />
          </StyledLink>
        ))}
      </ItemListContainer>
    </SideBarContainer>
  );
};

export default SideBar;
