"use client";

import React, { useEffect, useState } from "react";
import { LogoIcon } from "../icons";
import ItemList from "../item-list";
import {
  ItemListContainer,
  Logo,
  SideBarContainer,
  StyledLink,
  ItemActive,
} from "./styles";
import { sidebarItems } from "@/src/utils/constants";
import { IconName } from "../icon";

interface SideBarProps {
  onItemClick?: () => void;
  itemActive?: string;
}

const SideBar = ({ onItemClick, itemActive = "" }: SideBarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const activeItemIndex = sidebarItems.findIndex(
      (item) => item.id === itemActive,
    );
    setActiveIndex(activeItemIndex);
  }, [itemActive]);

  const handleSetIsActive = (id: string): boolean => id === itemActive;
  return (
    <SideBarContainer>
      <Logo>
        <LogoIcon />
      </Logo>

      <ItemListContainer>
        <ItemActive $position={activeIndex} />
        {sidebarItems.map(({ iconName, title, route, id }, index) => (
          <StyledLink href={route} key={id} onClick={onItemClick}>
            <ItemList
              iconName={iconName as IconName}
              title={title}
              isActive={handleSetIsActive(id)}
              position={index}
            />
          </StyledLink>
        ))}
      </ItemListContainer>
    </SideBarContainer>
  );
};

export default SideBar;
