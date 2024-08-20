import { IconName } from "../components/icon";

export const sidebarItems: {
  iconName: IconName;
  title: string;
  route: string;
}[] = [
  { iconName: "home", title: "Dashboard", route: "/" },
  { iconName: "transfer", title: "Transactions", route: "/transactions" },
  { iconName: "user", title: "Accounts", route: "/accounts" },
  { iconName: "investment", title: "Investments", route: "/investments" },
  { iconName: "card", title: "Credit Cards", route: "/credit-cards" },
  { iconName: "loan", title: "Loans", route: "/loans" },
  { iconName: "service", title: "Services", route: "/services" },
  { iconName: "setting", title: "Setting", route: "/setting" },
];

export const cardTransactionItems = [
  {
    icon: "/assets/image/transaction-card.svg",
    title: "Deposit from my Card",
    date: "28 January 2021",
    value: "-$850",
  },
  {
    icon: "/assets/image/transaction-paypal.svg",
    title: "Deposit Paypal",
    date: "25 January 2021",
    value: "+$2,500",
  },
  {
    icon: "/assets/image/transaction-transfer.svg",
    title: "Jemi Wilson",
    date: "21 January 2021",
    value: "+$5,400",
  },
];

export const contacts = [
  {
    url: "/assets/image/avatar-contact1.svg",
    title: "Livia Bator",
    subtitle: "CEO",
  },
  {
    url: "/assets/image/avatar-contact2.svg",
    title: "Randy Press",
    subtitle: "Director",
  },
  {
    url: "/assets/image/avatar-contact3.svg",
    title: "Workman",
    subtitle: "Designer",
  },
];
