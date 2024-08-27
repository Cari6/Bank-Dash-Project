import React from "react";
import {
  Date,
  Description,
  DescriptionContainer,
  DescriptionDateContainer,
  TableMobileContainer,
  TBody,
  TD,
  TRBody,
} from "./style";
import { tableTransactionsData } from "@/src/utils/constants";
import Image from "next/image";

const TableMobile = () => {
  const getAmountColor = (amount: string) => {
    return amount.startsWith("+") ? "#41D4A8" : "#FF4B4A";
  };

  const getIcon = (amount: string) => {
    return amount.startsWith("+")
      ? "/assets/image/arrow-up.svg"
      : "/assets/image/arrow-down.svg";
  };
  return (
    <TableMobileContainer>
      <TBody>
        {tableTransactionsData.map((data, index) => (
          <TRBody key={index}>
            <TD>
              <DescriptionContainer>
                <Image
                  src={getIcon(data.amount)}
                  alt=""
                  width={20}
                  height={20}
                  style={{ marginRight: 10 }}
                />

                <DescriptionDateContainer>
                  <Description>{data.description}</Description>
                  <Date>{data.date}</Date>
                </DescriptionDateContainer>
              </DescriptionContainer>
            </TD>

            <TD style={{ color: getAmountColor(data.amount) }}>
              {data.amount}
            </TD>
          </TRBody>
        ))}
      </TBody>
    </TableMobileContainer>
  );
};

export default TableMobile;
