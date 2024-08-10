"use client";
import React from "react";
import Image from "next/image";
import {
  BalanceContainer,
  BottomContainer,
  CardContainer,
  CardContainer2,
  CardHolderContainer,
  CenterContainer,
  TopContainer,
  ValidContainer,
} from "./styles";
import Typography from "../typography";

const CreditCard = () => {
  return (
    <>
      <CardContainer>
        <TopContainer>
          <BalanceContainer>
            <Typography variant="description4" style={{ margin: 0 }}>
              Balance
            </Typography>
            <Typography variant="title2" style={{ color: "#fff", margin: 0 }}>
              $5,756
            </Typography>
          </BalanceContainer>
          <img src="./assets/image/chip-white.svg" alt="" />
        </TopContainer>
        <CenterContainer>
          <CardHolderContainer>
            <Typography
              variant="description4"
              style={{ opacity: 0.7, margin: 0 }}
            >
              CARD HOLDER
            </Typography>
            <Typography variant="description4" style={{ margin: 0 }}>
              Eddy Cusuma
            </Typography>
          </CardHolderContainer>

          <ValidContainer>
            <Typography
              variant="description4"
              style={{ opacity: 0.7, margin: 0 }}
            >
              VALID THRU
            </Typography>
            <Typography variant="description4" style={{ margin: 0 }}>
              12/22
            </Typography>
          </ValidContainer>
        </CenterContainer>
        <BottomContainer>
          <Typography variant="title1" style={{ color: "#fff" }}>
            3778 **** **** 1234
          </Typography>
          <img src="./assets/image/master-image.svg" alt="" />
        </BottomContainer>
      </CardContainer>

      <CardContainer2>
        <TopContainer>
          <BalanceContainer>
            <Typography
              variant="description4"
              style={{ margin: 0, color: "#718EBF" }}
            >
              Balance
            </Typography>
            <Typography
              variant="title2"
              style={{ margin: 0, color: "#343C6A" }}
            >
              $5,756
            </Typography>
          </BalanceContainer>
          <img src="./assets/image/chip-black.svg" alt="" />
        </TopContainer>
        <CenterContainer>
          <CardHolderContainer>
            <Typography variant="description3" style={{ margin: 0 }}>
              CARD HOLDER
            </Typography>
            <Typography
              variant="description4"
              style={{ margin: 0, color: "#343C6A" }}
            >
              Eddy Cusuma
            </Typography>
          </CardHolderContainer>

          <ValidContainer>
            <Typography variant="description3" style={{ margin: 0 }}>
              VALID THRU
            </Typography>
            <Typography
              variant="description4"
              style={{ margin: 0, color: "#343C6A" }}
            >
              12/22
            </Typography>
          </ValidContainer>
        </CenterContainer>
        <BottomContainer>
          <Typography variant="title1">3778 **** **** 1234</Typography>
          <img src="./assets/image/master-black.svg" alt="" />
        </BottomContainer>
      </CardContainer2>
    </>
  );
};

export default CreditCard;
