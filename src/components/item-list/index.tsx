"use client";
import React from "react";
import Icon, { IconName } from "../icon";
import { ItemlistContainer } from "./styles";
import Typography from "../typography";

interface ItemListProps {
  title: string;
  iconName: IconName;
  isActive?: boolean;
  position: number;
  disabled?: boolean;
}

const ItemList = ({
  title,
  iconName,
  isActive,
  disabled = false,
}: ItemListProps) => {
  return (
    <ItemlistContainer $disabled={disabled}>
      <Icon name={iconName} isActive={isActive} />
      <Typography
        variant="title2"
        style={{ marginLeft: 25, color: isActive ? "#2d60ff" : "initial" }}
      >
        {title}
      </Typography>
    </ItemlistContainer>
  );
};

export default ItemList;
