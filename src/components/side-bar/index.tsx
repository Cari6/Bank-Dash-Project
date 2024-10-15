"use client";
import React, { useEffect, useState } from "react";
import ItemList from "../item-list";
import {
  ItemListContainer,
  Logo,
  SideBarContainer,
  StyledLink,
  ItemActive,
} from "./styles";
import Image from "next/image";
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
      (item) => item.id === itemActive
    );
    setActiveIndex(activeItemIndex);
  }, [itemActive]);

  const handleSetIsActive = (id: string): boolean => id === itemActive;
  return (
    <SideBarContainer>
      <Logo>
        <Image src="assets/image/logo.svg" alt="" width={183} height={36} />
      </Logo>

      <ItemListContainer>
        <ItemActive $position={activeIndex} />
        {sidebarItems.map(({ iconName, title, route, id, disabled }, index) => (
          <StyledLink
            href={disabled ? "#" : route}
            key={id}
            onClick={(e) => {
              if (disabled) {
                e.preventDefault();
              } else {
                onItemClick && onItemClick();
              }
            }}
          >
            <ItemList
              iconName={iconName as IconName}
              title={title}
              isActive={handleSetIsActive(id)}
              position={index}
              disabled={disabled}
            />
          </StyledLink>
        ))}
      </ItemListContainer>
    </SideBarContainer>
  );
};

export default SideBar;
