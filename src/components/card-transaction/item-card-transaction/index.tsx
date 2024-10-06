"use client";
import React from "react";
import Image from "next/image";
import {
  ItemContainer,
  LeftContainer,
  TextContainer,
  TextValue,
} from "./styles";
import Typography from "../../typography";
interface ItemCardTransactionProps {
  icon: string;
  title: string;
  date: string;
  value: string;
}

const ItemCardTransaction = ({
  icon,
  title,
  date,
  value,
}: ItemCardTransactionProps) => {
  const isNegative = value.startsWith("-");

  return (
    <ItemContainer>
      <LeftContainer>
        <Image src={icon} alt="" width={55} height={55} />
        <TextContainer>
          <Typography variant="description2">{title}</Typography>
          <Typography variant="description3">{date}</Typography>
        </TextContainer>
      </LeftContainer>
      <TextValue $isNegative={isNegative}>{value}</TextValue>
    </ItemContainer>
  );
};

export default ItemCardTransaction;
