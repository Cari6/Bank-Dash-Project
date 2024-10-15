"use client";
import React from "react";
import Typography from "../typography";
import Input from "../input";
import IconButton from "../icon-button";
import Avatar from "../avatar";
import { ContainerRight, HeaderContainer, TitleContainer } from "./styles";
import { useUserData } from "@/src/hooks/data-profile";
import { usePathname } from "next/navigation";

const Header = () => {
  const { user } = useUserData();
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    switch (path) {
      case "/":
        return "Overview";
      case "/transactions":
        return "Transactions";
      case "/accounts":
        return "Accounts";
      case "/investment":
        return "Investment";
      case "/credit-cards":
        return "Credit Cards";
      case "/loans":
        return "Loans";
      case "/services":
        return "Services";
      case "/setting":
        return "Setting";
      default:
        return "Overview";
    }
  };

  return (
    <HeaderContainer>
      <TitleContainer>
        <Typography variant="h1">{getPageTitle(pathname)}</Typography>
      </TitleContainer>
      <ContainerRight>
        <Input
          placeholder="Search for something"
          icon="/assets/image/search.svg"
        />

        <IconButton url="/assets/image/setting-header.svg" />
        <IconButton url="/assets/image/notification.svg" />
        <Avatar url={user.avatarUrl ?? "/assets/image/avatar.svg"} />
      </ContainerRight>
    </HeaderContainer>
  );
};

export default Header;
