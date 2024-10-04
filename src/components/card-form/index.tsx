import React, { useEffect } from "react";
import { CardContainer, CustomButton, InputContainer, Item } from "./styles";
import Typography from "../typography";
import { Controller, useForm } from "react-hook-form";
import Input from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormCardValidationSchema } from "./validation";

interface FormCardValues {
  cardType: string;
  nameOnCard: string;
  cardNumber: string;
  expirationDate: string;
}

const FormCard = () => {
  const {
    control,
    handleSubmit,
    setValue,
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

  useEffect(() => {
    const savedData = localStorage.getItem("cardData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof FormCardValues, parsedData[key]);
      });
    }
  }, []);

  const onSubmit = (data: FormCardValues) => {
    localStorage.setItem("cardData", JSON.stringify(data));
    alert("The card has been added successfully");
    reset();
    console.log("data", data);
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
            <Input
              variant="variant1"
              text="Card Type"
              placeholder="Classic"
              errorMessage={errors.cardType?.message}
              {...field}
            />
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
            />
          )}
        />

        <Controller
          control={control}
          name="expirationDate"
          render={({ field }) => (
            <Input
              type="date"
              variant="variant1"
              text="Expiration Date"
              placeholder="25 January 2015"
              errorMessage={errors.expirationDate?.message}
              {...field}
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
