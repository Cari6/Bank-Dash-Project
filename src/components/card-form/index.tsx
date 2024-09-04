import React from "react";
import Input from "../input";
import { CardContainer, CustomButton, InputContainer, Item } from "./styles";
import Typography from "../typography";

interface FormCardProps {
  height?: string;
}

const FormCard = ({ height }: FormCardProps) => {
  return (
    <CardContainer style={{ minHeight: height }}>
      <Typography variant="description3" style={{ lineHeight: 1.8 }}>
        Credit Card generally means a plastic card issued by Scheduled
        Commercial Banks assigned to a Cardholder, with a credit limit, that can
        be used to purchase goods and services on credit or obtain cash
        advances.
      </Typography>

      <InputContainer>
        <Item>
          <Typography>Card Type</Typography>
          <Input variant="variant1" placeholder="Classic" />
        </Item>

        <Item>
          <Typography>Name on Card</Typography>
          <Input variant="variant1" placeholder="My Cards" />
        </Item>

        <Item>
          <Typography>Card Number</Typography>
          <Input variant="variant1" placeholder="**** **** **** ****" />
        </Item>

        <Item>
          <Typography>Expiration Date</Typography>
          <Input variant="variant1" placeholder="25 January 2025" />
        </Item>
      </InputContainer>

      <CustomButton title="Add Card" variant="default" />
    </CardContainer>
  );
};

export default FormCard;
