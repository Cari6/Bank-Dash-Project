"use client";

import React from "react";
import { LogoIcon } from "../icons";
import ItemList from "../item-list";
import { IconName } from "../icon";
import {
  ItemListContainer,
  Logo,
  SideBarContainer,
  StyledLink,
} from "./styles";

const Sidebar = () => {
  const items: { iconName: IconName; title: string; route: string }[] = [
    { iconName: "home", title: "Dashboard", route: "/" },
    { iconName: "transfer", title: "Transactions", route: "/transactions" },
    { iconName: "user", title: "Accounts", route: "/accounts" },
    { iconName: "investment", title: "Investments", route: "investments" },
    { iconName: "card", title: "Credit Cards", route: "/credit-cards" },
    { iconName: "loan", title: "Loans", route: "/loans" },
    { iconName: "service", title: "Services", route: "/services" },
    { iconName: "econometrics", title: "My Privileges", route: "/" },
    { iconName: "setting", title: "Setting", route: "/setting" },
  ];

  return (
    <SideBarContainer>
      <Logo>
        <LogoIcon />
      </Logo>
      <ItemListContainer>
        {items.map(({ iconName, title, route }) => (
          <StyledLink href={route} key={iconName}>
            <ItemList iconName={iconName} title={title} />
          </StyledLink>
        ))}
      </ItemListContainer>
    </SideBarContainer>
  );
};

export default Sidebar;
