import React from "react";
import { TBody, TH, TD, THead, TRBody, TRHead, TableContainer } from "./style";
import { tableExpenseData, tableHead } from "@/src/utils/constants";
import Button from "../../button";
import Image from "next/image";

const ExpenseTable = () => {
  const getAmountColor = (amount: string) => {
    return amount.startsWith("+") ? "#41D4A8" : "#FF4B4A";
  };

  const getIcon = (amount: string) => {
    return amount.startsWith("+")
      ? "/assets/image/arrow-up.svg"
      : "/assets/image/arrow-down.svg";
  };
  return (
    <TableContainer>
      <THead>
        <TRHead>
          {tableHead.map((head, index) => (
            <TH key={index}>{head}</TH>
          ))}
          <TH>Receipt</TH>
        </TRHead>
      </THead>
      <TBody>
        {tableExpenseData.map((data, index) => (
          <TRBody key={index}>
            <TD>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={getIcon(data.amount)}
                  alt=""
                  width={20}
                  height={20}
                  style={{ marginRight: 10 }}
                />
                {data.description}
              </div>
            </TD>
            <TD>{data.transactionId}</TD>
            <TD>{data.type}</TD>
            <TD>{data.card}</TD>
            <TD>{data.date}</TD>
            <TD style={{ color: getAmountColor(data.amount) }}>
              {data.amount}
            </TD>
            <TD>
              <Button title="Download" variant="outline" />
            </TD>
          </TRBody>
        ))}
      </TBody>
    </TableContainer>
  );
};

export default ExpenseTable;
