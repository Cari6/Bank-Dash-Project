import React from "react";
import { CardContainer, CustomButton, InputContainer, Select } from "./styles";
import Typography from "../typography";
import { Controller, useForm } from "react-hook-form";
import Input from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormCardValidationSchema } from "./validation";
import { useCards } from "@/src/contexts/data-formCard/provider";

interface FormCardValues {
  cardType: string;
  nameOnCard: string;
  cardNumber: string;
  expirationDate: string;
}

const FormCard = () => {
  const { addCard } = useCards();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormCardValues>({
    defaultValues: {
      cardType: "",
      nameOnCard: "",
      cardNumber: "",
      expirationDate: "",
    },
    resolver: yupResolver(FormCardValidationSchema),
  });

  const formatCardNumber = (value: string) => {
    const cleanedValue = value.replace(/\D+/g, "").slice(0, 16);

    return cleanedValue.match(/.{1,4}/g)?.join(" ") || "";
  };

  const maskCardNumber = (cardNumber: string) => {
    const cleanedValue = cardNumber.replace(/\D+/g, "").slice(0, 16);
    const formatted = cleanedValue.replace(
      /^(\d{4})(\d{4})(\d{4})(\d{4})$/,
      "$1 **** **** $4"
    );

    return formatted;
  };

  const formatToMMYYYY = (value: string) => {
    const [year, month] = value.split("-");
    return `${month}/${year}`;
  };

  const onSubmit = (data: FormCardValues) => {
    const maskedCardNumber = maskCardNumber(data.cardNumber);

    const formattedData = {
      ...data,
      cardNumber: maskedCardNumber,
      expirationDate: formatToMMYYYY(data.expirationDate),
    };

    const existingCards = JSON.parse(localStorage.getItem("cardData") || "[]");

    const updatedCards = Array.isArray(existingCards)
      ? [...existingCards, formattedData]
      : [formattedData];

    addCard(formattedData);
    alert("The card has been added successfully");
    reset();
    console.log("data", updatedCards);
  };

  console.log("errors", errors);

  return (
    <CardContainer>
      <Typography
        variant="description3"
        style={{ lineHeight: 1.8, marginBottom: 20 }}
      >
        Credit Card generally means a plastic card issued by Scheduled
        Commercial Banks assigned to a Cardholder, with a credit limit, that can
        be used to purchase goods and services on credit or obtain cash advances
      </Typography>

      <InputContainer>
        <Controller
          control={control}
          name="cardType"
          render={({ field }) => (
            <div>
              <Typography style={{ margin: "0 0 5px 0 " }}>
                Card Type
              </Typography>
              <Select {...field}>
                <option value="">Select Card Type</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </Select>
              {errors.cardType && (
                <Typography error style={{ marginTop: 15 }}>
                  {errors.cardType.message}
                </Typography>
              )}
            </div>
          )}
        />

        <Controller
          control={control}
          name="nameOnCard"
          render={({ field }) => (
            <Input
              variant="variant1"
              text="Name On Card"
              placeholder="My Cards"
              errorMessage={errors.nameOnCard?.message}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="cardNumber"
          render={({ field }) => (
            <Input
              variant="variant1"
              text="Card Number"
              placeholder="**** **** **** ****"
              errorMessage={errors.cardNumber?.message}
              {...field}
              onChange={(e) => {
                const formattedValue = formatCardNumber(e.target.value);
                field.onChange(formattedValue);
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="expirationDate"
          render={({ field }) => (
            <Input
              type="month"
              variant="variant1"
              text="Expiration Date"
              errorMessage={errors.expirationDate?.message}
              {...field}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
            />
          )}
        />
      </InputContainer>
      <CustomButton
        onClick={handleSubmit(onSubmit)}
        title="Add Card"
        variant="form"
      />
    </CardContainer>
  );
};

export default FormCard;
