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
import { IconName } from "../icon";

interface SideBarProps {
  onItemClick?: () => void;
  itemActive?: string;
}

const SideBar = ({ onItemClick, itemActive = "" }: SideBarProps) => {
  const handleSetIsActive = (id: string, itemActive: string): boolean =>
    id === itemActive;

  return (
    <SideBarContainer>
      <Logo>
        <LogoIcon />
      </Logo>
      <ItemListContainer>
        {sidebarItems.map(({ iconName, title, route, id }) => (
          <StyledLink href={route} key={id} onClick={onItemClick}>
            <ItemList
              iconName={iconName as IconName}
              title={title}
              isActive={handleSetIsActive(id, itemActive)}
            />
          </StyledLink>
        ))}
      </ItemListContainer>
    </SideBarContainer>
  );
};

export default SideBar;
