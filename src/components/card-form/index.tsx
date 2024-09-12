import React from "react";
import Input from "../input";
import { CardContainer, CustomButton, InputContainer, Item } from "./styles";
import Typography from "../typography";

export interface FormCardProps {
  height?: string;
  description?: string;
  titleButton: string;
  itemsForm: { text: string; placeholder: string }[];
}

const FormCard = ({
  height,
  description,
  itemsForm,
  titleButton,
}: FormCardProps) => {
  return (
    <CardContainer style={{ minHeight: height }}>
      <Typography variant="description3" style={{ lineHeight: 1.8 }}>
        {description}
      </Typography>

      <InputContainer>
        {itemsForm.map((item, index) => (
          <Item key={index}>
            <Typography>{item.text}</Typography>
            <Input variant="variant1" placeholder={item.placeholder} />
          </Item>
        ))}
      </InputContainer>

      <CustomButton title={titleButton} variant="default" />
    </CardContainer>
  );
};

export default FormCard;
