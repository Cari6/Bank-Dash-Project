"use client";
import React from "react";
import ListContact from "./list-contact";
import TransferInput from "./transfer-input";
import { CardContainer } from "./styles";

const CardQuickTransfer = () => {
  return (
    <CardContainer>
      <ListContact />
      <TransferInput />
    </CardContainer>
  );
};

export default CardQuickTransfer;
