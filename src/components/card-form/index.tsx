import React from "react";
import Input from "../input";
import { CardContainer, InputContainer, Item } from "./styles";
import Typography from "../typography";

export interface FormCardProps {
  description?: string;
  itemsForm: { text: string; placeholder: string }[];
}

const FormCard = ({ description, itemsForm }: FormCardProps) => {
  return (
    <CardContainer>
      <Typography
        variant="description3"
        style={{ lineHeight: 1.8, marginBottom: 20 }}
      >
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
    </CardContainer>
  );
};

export default FormCard;
