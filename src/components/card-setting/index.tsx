import React, { forwardRef } from "react";
import { CardContainer } from "./styles";
import ItemSettingCard from "./item-setting-card";
import { cardSettingItems } from "@/src/utils/constants";

const SettingCard = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <CardContainer ref={ref} {...props}>
      {cardSettingItems.map((item, index) => (
        <ItemSettingCard key={index} {...item} />
      ))}
    </CardContainer>
  );
});

export default SettingCard;
