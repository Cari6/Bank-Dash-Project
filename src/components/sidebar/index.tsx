import React from "react";
import { styles } from "./styles";
import { LogoIcon } from "../icons";
import ItemList from "../item-list";

const Sidebar = () => {
  return (
    <div style={styles().sidebarContainer}>
      <div style={styles().logo}>
        <LogoIcon />
      </div>
      <div style={styles().itemListContainer}>
        <ItemList iconName="home" title="Dashboard" />
        <ItemList iconName="transfer" title="Transactions" />
        <ItemList iconName="user" title="Accounts" />
        <ItemList iconName="investment" title="Investments" />
        <ItemList iconName="card" title="Credit Cards" />
        <ItemList iconName="loan" title="Loans" />
        <ItemList iconName="service" title="Services" />
        <ItemList iconName="econometrics" title="My Privileges" />
        <ItemList iconName="setting" title="Setting" />
      </div>
    </div>
  );
};

export default Sidebar;
