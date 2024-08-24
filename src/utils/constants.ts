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

export const tableHead = [
  "Description",
  "Transaction ID",
  "Type",
  "Card",
  "Date",
  "Amount",
];
export const tableData = [
  {
    description: "Spotify Subscription",
    transactionId: "#12548796",
    type: "Shopping",
    card: "****1234",
    date: "28 Jan, 12:30 AM",
    amount: "-$2,500",
  },
  {
    description: "Freepik Sales",
    transactionId: "#12548796",
    type: "Transfer",
    card: "****1234",
    date: "25 Jan, 10:40 PM",
    amount: "+$750",
  },
  {
    description: "Mobile Service",
    transactionId: "#12548796",
    type: "Shopping",
    card: "****1234",
    date: "20 Jan, 10:40 PM",
    amount: "-$150",
  },
  {
    description: "Wilson",
    transactionId: "#12548796",
    type: "Transfer",
    card: "****1234",
    date: "14 Jan, 03:29 PM",
    amount: "-$1,050",
  },
  {
    description: "Emilly",
    transactionId: "#12548796",
    type: "Transfer",
    card: "****1234",
    date: "15 Jan, 10:40 PM",
    amount: "+$840",
  },
  {
    description: "Netflix Subscription",
    transactionId: "#12548797",
    type: "Shopping",
    card: "****5678",
    date: "10 Jan, 02:15 PM",
    amount: "-$15.99",
  },
  {
    description: "Amazon Purchase",
    transactionId: "#12548798",
    type: "Shopping",
    card: "****9876",
    date: "08 Jan, 09:30 AM",
    amount: "-$120.45",
  },
  {
    description: "Gym Membership",
    transactionId: "#12548799",
    type: "Shopping",
    card: "****5432",
    date: "05 Jan, 07:00 AM",
    amount: "-$45.00",
  },
  {
    description: "Utility Bill",
    transactionId: "#12548800",
    type: "Transfer",
    card: "****8765",
    date: "03 Jan, 11:45 AM",
    amount: "-$90.25",
  },
  {
    description: "Freelance Payment",
    transactionId: "#12548801",
    type: "Income",
    card: "****3456",
    date: "01 Jan, 05:20 PM",
    amount: "+$1,500",
  },
];
