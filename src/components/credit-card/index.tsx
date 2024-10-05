"use client";
import React from "react";
import Image from "next/image";
import {
  BalanceContainer,
  BottomContainer,
  CardContainer,
  CardHolderContainer,
  CenterContainer,
  CustomIconButton,
  TopContainer,
  ValidContainer,
} from "./styles";
import Typography from "../typography";

interface CreditCardProps {
  variant: "variant1" | "variant2";
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  onDelete?: () => void;
  showDeleteButton?: boolean;
}

const CreditCard = ({
  variant,
  balance,
  cardHolder,
  validThru,
  cardNumber,
  onDelete,
  showDeleteButton = false,
}: CreditCardProps) => {
  const isDefault = variant === "variant1";
  return (
    <>
      <CardContainer variant={variant}>
        <TopContainer>
          <BalanceContainer>
            <Typography
              variant="description4"
              style={{ margin: 0, color: isDefault ? "#fff" : "#718EBF" }}
            >
              Balance
            </Typography>
            <Typography
              variant="title2"
              style={{ margin: 0, color: isDefault ? "#fff" : "#343C6A" }}
            >
              {balance}
            </Typography>
          </BalanceContainer>
          <Image
            src={
              isDefault
                ? "./assets/image/chip-white.svg"
                : "./assets/image/chip-black.svg"
            }
            alt=""
            width={35}
            height={35}
          />
        </TopContainer>
        <CenterContainer>
          <CardHolderContainer>
            <Typography
              variant="description4"
              style={{
                opacity: isDefault ? 0.7 : 1,
                color: isDefault ? "#fff" : "#718EBF",
                margin: 0,
              }}
            >
              CARD HOLDER
            </Typography>
            <Typography
              variant="description4"
              style={{ margin: 0, color: isDefault ? "#fff" : "#343C6A" }}
            >
              {cardHolder}
            </Typography>
          </CardHolderContainer>

          <ValidContainer>
            <Typography
              variant="description4"
              style={{
                opacity: isDefault ? 0.7 : 1,
                color: isDefault ? "#fff" : "#718EBF",
                margin: 0,
              }}
            >
              VALID THRU
            </Typography>
            <Typography
              variant="description4"
              style={{ margin: 0, color: isDefault ? "#fff" : "#343C6A" }}
            >
              {validThru}
            </Typography>
          </ValidContainer>
        </CenterContainer>
        <BottomContainer>
          <Typography
            variant="title1"
            style={{ color: isDefault ? "#fff" : "#343C6A" }}
          >
            {cardNumber}
          </Typography>
          <Image
            src={
              isDefault
                ? "./assets/image/master-white.svg"
                : "./assets/image/master-black.svg"
            }
            alt=""
            width={44}
            height={33}
          />
        </BottomContainer>
        {showDeleteButton && (
          <CustomIconButton url="/assets/image/delete.svg" onClick={onDelete} />
        )}
      </CardContainer>
    </>
  );
};

export default CreditCard;
