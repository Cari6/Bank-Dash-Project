import React from "react";
import { CardContainer } from "./styles";
import ItemSettingCard from "./item-setting-card";
import { cardSettingItems } from "@/src/utils/constants";

const SettingCard = () => {
  return (
    <CardContainer>
      {cardSettingItems.map((item, index) => (
        <ItemSettingCard key={index} {...item} />
      ))}
    </CardContainer>
  );
};

export default SettingCard;
