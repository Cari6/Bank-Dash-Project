import React from "react";
import Image from "next/image";
import Typography from "../../typography";
import Button from "../../button";
import { CardContainer, CardItem, CardType, ItemMobile } from "./styles";

interface CardListProps {
  url: string;
  cardType: string;
  bankName: string;
  cardNumber: string;
  name: string;
}

const ItemCardList = ({
  url,
  cardType,
  bankName,
  cardNumber,
  name,
}: CardListProps) => {
  return (
    <CardContainer>
      <CardType>
        <Image src={url} alt="" width={60} height={60} />
        <ItemMobile>
          <Typography variant="description2">Card Type</Typography>
          <Typography variant="description3">{cardType}</Typography>
        </ItemMobile>
      </CardType>
      <ItemMobile>
        <Typography variant="description2">Bank</Typography>
        <Typography variant="description3">{bankName}</Typography>
      </ItemMobile>
      <CardItem>
        <Typography variant="description2">Card Number</Typography>
        <Typography variant="description3">{cardNumber}</Typography>
      </CardItem>
      <CardItem>
        <Typography variant="description2">Name on Card</Typography>
        <Typography variant="description3">{name}</Typography>
      </CardItem>
      <ItemMobile>
        <Button title="View Details" variant="outline" />
      </ItemMobile>
    </CardContainer>
  );
};

export default ItemCardList;
