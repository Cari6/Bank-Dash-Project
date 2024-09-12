import { FormCardProps } from "../components/card-form";

export const sidebarItems = [
  { iconName: "home", title: "Dashboard", route: "/", id: "dashboard" },
  {
    iconName: "transfer",
    title: "Transactions",
    route: "/transactions",
    id: "transactions",
  },
  { iconName: "user", title: "Accounts", route: "/accounts", id: "accounts" },
  {
    iconName: "investment",
    title: "Investments",
    route: "/investments",
    id: "investments",
  },
  {
    iconName: "card",
    title: "Credit Cards",
    route: "/credit-cards",
    id: "credit-cards",
  },
  { iconName: "loan", title: "Loans", route: "/loans", id: "loans" },
  {
    iconName: "service",
    title: "Services",
    route: "/services",
    id: "services",
  },
  { iconName: "setting", title: "Setting", route: "/setting", id: "setting" },
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
export const tableTransactionsData = [
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
    amount: "-$3,500",
  },
  {
    description: "Amazon Purchase",
    transactionId: "#12548798",
    type: "Shopping",
    card: "****9876",
    date: "08 Jan, 09:30 AM",
    amount: "-$1,500",
  },
  {
    description: "Gym Membership",
    transactionId: "#12548799",
    type: "Shopping",
    card: "****5432",
    date: "05 Jan, 07:00 AM",
    amount: "-$5,000",
  },
  {
    description: "Utility Bill",
    transactionId: "#12548800",
    type: "Transfer",
    card: "****8765",
    date: "03 Jan, 11:45 AM",
    amount: "-$980",
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

export const tableIncomeData = [
  {
    description: "Freepik Sales",
    transactionId: "#12548796",
    type: "Transfer",
    card: "****1234",
    date: "25 Jan, 10:40 PM",
    amount: "+$750",
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
    description: "Freelance Payment",
    transactionId: "#12548801",
    type: "Income",
    card: "****3456",
    date: "01 Jan, 05:20 PM",
    amount: "+$1,500",
  },
];

export const tableExpenseData = [
  {
    description: "Spotify Subscription",
    transactionId: "#12548796",
    type: "Shopping",
    card: "****1234",
    date: "28 Jan, 12:30 AM",
    amount: "-$2,500",
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
    description: "Netflix Subscription",
    transactionId: "#12548797",
    type: "Shopping",
    card: "****5678",
    date: "10 Jan, 02:15 PM",
    amount: "-$3,500",
  },
  {
    description: "Amazon Purchase",
    transactionId: "#12548798",
    type: "Shopping",
    card: "****9876",
    date: "08 Jan, 09:30 AM",
    amount: "-$1,500",
  },
  {
    description: "Gym Membership",
    transactionId: "#12548799",
    type: "Shopping",
    card: "****5432",
    date: "05 Jan, 07:00 AM",
    amount: "-$5,000",
  },
  {
    description: "Utility Bill",
    transactionId: "#12548800",
    type: "Transfer",
    card: "****8765",
    date: "03 Jan, 11:45 AM",
    amount: "-$980",
  },
];

export const cardListItems = [
  {
    url: "/assets/image/card-list-1.svg",
    cardType: "Secondary",
    bankName: "DBL Bank",
    cardNumber: "**** **** 5600",
    name: "William",
  },
  {
    url: "/assets/image/card-list-2.svg",
    cardType: "Secondary",
    bankName: "BRC Bank",
    cardNumber: "**** **** 4300",
    name: "Michel",
  },
  {
    url: "/assets/image/card-list-3.svg",
    cardType: "Secondary",
    bankName: "ABM Bank",
    cardNumber: "**** **** 7560",
    name: "Edward",
  },
];

export const formCreditCard: FormCardProps["itemsForm"] = [
  { text: "Card Type", placeholder: "Classic" },
  { text: "Name On Card", placeholder: "My Cards" },
  { text: "Card Number", placeholder: "**** **** **** ****" },
  { text: "Expiration Date", placeholder: "25 January 2025" },
];

export const formSetting: FormCardProps["itemsForm"] = [
  { text: "Your Name", placeholder: "Charlene Reed" },
  { text: "User Name", placeholder: "Charlene Reed" },
  { text: "Email", placeholder: "charlenereed@gmail.com" },
  { text: "Password", placeholder: "**********" },
  { text: "Date of Birth", placeholder: "25 January 1990" },
  { text: "Present Address", placeholder: "San Jose, California, USA" },
  { text: "Permanent Address", placeholder: "San Jose, California, USA" },
  { text: "City", placeholder: "San Jose" },
  { text: "Postal Code", placeholder: "45962" },
  { text: "Country", placeholder: "USA" },
];

export const cardSettingItems = [
  {
    url: "/assets/image/setting-card.svg",
    title: "Block Card",
    description: "Instantly block your card",
  },
  {
    url: "/assets/image/setting-pin.svg",
    title: "Change Pin Code",
    description: "Choose another pin code",
  },
  {
    url: "/assets/image/setting-google.svg",
    title: "Add to Google Pay",
    description: "Whitdraw without any card",
  },
  {
    url: "/assets/image/setting-apple.svg",
    title: "Add to Apple Pay",
    description: "Whitdraw without any card",
  },
  {
    url: "/assets/image/setting-apple.svg",
    title: "Add to Apple Store",
    description: "Whitdraw without any card",
  },
];
