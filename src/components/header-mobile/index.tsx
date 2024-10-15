"use client";
import React from "react";
import {
  ContainerTop,
  HeaderMobileContainer,
  InputMobileContainer,
} from "./styles";
import IconButton from "../icon-button";
import Typography from "../typography";
import Avatar from "../avatar";
import Input from "../input";
import { useUserData } from "@/src/hooks/data-profile";
import { usePathname } from "next/navigation";

const HeaderMobile = ({ isSideBarOpen, setSideBarOpen }: any) => {
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
    <HeaderMobileContainer>
      <ContainerTop>
        <IconButton
          url="/assets/image/menu-icon.svg"
          style={{ backgroundColor: "transparent" }}
          onClick={() => setSideBarOpen(!isSideBarOpen)}
        />

        <Typography variant="h1">{getPageTitle(pathname)}</Typography>

        <Avatar url={user.avatarUrl ?? "/assets/image/avatar.svg"} />
      </ContainerTop>
      <InputMobileContainer>
        <Input
          placeholder="Search for something"
          icon="/assets/image/search.svg"
        />
      </InputMobileContainer>
    </HeaderMobileContainer>
  );
};

export default HeaderMobile;
