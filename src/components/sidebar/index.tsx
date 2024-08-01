import React from "react";
import { styles } from "./styles";
import { LogoIcon } from "../icons";
import ItemList from "../item-list";
import { IconName } from "../icon";
import Link from "next/link";

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
    <div style={styles().sidebarContainer}>
      <div style={styles().logo}>
        <LogoIcon />
      </div>
      <div style={styles().itemListContainer}>
        {items.map(({ iconName, title, route }) => (
          <Link href={route} key={iconName} style={styles().link}>
            <ItemList iconName={iconName} title={title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
