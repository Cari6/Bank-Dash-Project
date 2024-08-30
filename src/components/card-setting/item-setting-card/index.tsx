import React from "react";
import Image from "next/image";
import { CardContainer } from "./styles";
import Typography from "../../typography";
import { urlToHttpOptions } from "url";

interface ItemSettingCardProps {
  url: string;
  title: string;
  description: string;
}

const ItemSettingCard = ({ url, title, description }: ItemSettingCardProps) => {
  return (
    <CardContainer>
      <Image src={url} alt="" width={60} height={60} />
      <div>
        <Typography>{title}</Typography>
        <Typography variant="description3">{description}</Typography>
      </div>
    </CardContainer>
  );
};

export default ItemSettingCard;
