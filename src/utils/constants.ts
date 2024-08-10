import { IconName } from "../components/icon";

export const sidebarItems: {
  iconName: IconName;
  title: string;
  route: string;
}[] = [
  { iconName: "home", title: "Dashboard", route: "/" },
  { iconName: "transfer", title: "Transactions", route: "/transactions" },
  { iconName: "user", title: "Accounts", route: "/accounts" },
  { iconName: "investment", title: "Investments", route: "investments" },
  { iconName: "card", title: "Credit Cards", route: "/credit-cards" },
  { iconName: "loan", title: "Loans", route: "/loans" },
  { iconName: "service", title: "Services", route: "/services" },
  { iconName: "setting", title: "Setting", route: "/setting" },
];
