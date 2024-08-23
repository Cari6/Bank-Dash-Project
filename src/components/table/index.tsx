import React from "react";
import { TableContainer, TBody, TH, TR, TD, THead } from "./styles";

const Table = () => {
  return (
    <TableContainer>
      <THead>
        <TR>
          {tableHead.map((head, index) => (
            <TH key={index}>{head}</TH>
          ))}
        </TR>
      </THead>
      <TBody>
        {tableData.map((data, index) => (
          <TR key={index}>
            <TD>{data.description}</TD>
            <TD>{data.transactionId}</TD>
            <TD>{data.type}</TD>
            <TD>{data.card}</TD>
            <TD>{data.date}</TD>
            <TD>{data.amount}</TD>
            <TD>{data.receipt}</TD>
          </TR>
        ))}
      </TBody>
    </TableContainer>
  );
};

export default Table;

const tableHead = [
  "Description",
  "Transaction ID",
  "Type",
  "Card",
  "Date",
  "Amount",
  "Receipt",
];

const tableData = [
  {
    description: "Spotify Subscription",
    transactionId: "#12548796",
    type: "Shopping",
    card: "****1234",
    date: "28 Jan, 12:30 AM",
    amount: "-$2,500",
    receipt: "Download",
  },
  {
    description: "Freepik Sales",
    transactionId: "#12548796",
    type: "Transfer",
    card: "****1234",
    date: "25 Jan, 10:40 PM",
    amount: "+$750",
    receipt: "Download",
  },
  {
    description: "Mobile Service",
    transactionId: "#12548796",
    type: "Shopping",
    card: "****1234",
    date: "20 Jan, 10:40 PM",
    amount: "-$150",
    receipt: "Download",
  },
  {
    description: "Wilson",
    transactionId: "#12548796",
    type: "Transfer",
    card: "****1234",
    date: "14 Jan, 03:29 PM",
    amount: "-$1,050",
    receipt: "Download",
  },
  {
    description: "Emilly",
    transactionId: "#12548796",
    type: "Transfer",
    card: "****1234",
    date: "15 Jan, 10:40 PM",
    amount: "+$840",
    receipt: "Download",
  },
  {
    description: "Netflix Subscription",
    transactionId: "#12548797",
    type: "Shopping",
    card: "****5678",
    date: "10 Jan, 02:15 PM",
    amount: "-$15.99",
    receipt: "Download",
  },
  {
    description: "Amazon Purchase",
    transactionId: "#12548798",
    type: "Shopping",
    card: "****9876",
    date: "08 Jan, 09:30 AM",
    amount: "-$120.45",
    receipt: "Download",
  },
  {
    description: "Gym Membership",
    transactionId: "#12548799",
    type: "Shopping",
    card: "****5432",
    date: "05 Jan, 07:00 AM",
    amount: "-$45.00",
    receipt: "Download",
  },
  {
    description: "Utility Bill",
    transactionId: "#12548800",
    type: "Transfer",
    card: "****8765",
    date: "03 Jan, 11:45 AM",
    amount: "-$90.25",
    receipt: "Download",
  },
  {
    description: "Freelance Payment",
    transactionId: "#12548801",
    type: "Income",
    card: "****3456",
    date: "01 Jan, 05:20 PM",
    amount: "+$1,500",
    receipt: "Download",
  },
];
