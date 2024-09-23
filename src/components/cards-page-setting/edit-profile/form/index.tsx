import React, { useState } from "react";
import {
  ButtonContainer,
  ContainerInner,
  CustomButton,
  FormContainer,
  InputContainer,
} from "./styles";
import { Input, Typography } from "@/src/components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditProfileValidationSchema } from "./validation";

interface FormValues {
  name: string;
  userName: string;
  email: string;
  password: string;
  date: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
}

const EditProfileForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      date: "",
      presentAddress: "",
      permanentAddress: "",
      city: "",
    },
    resolver: yupResolver(EditProfileValidationSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  const today = new Date().toISOString().split("T")[0];

  console.log("errors", errors);

  return (
    <FormContainer>
      <InputContainer>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <ContainerInner>
              <Input
                variant="variant1"
                placeholder="Charlene Reed"
                text="Your Name"
                {...field}
              />
              {errors.name && (
                <Typography error>{errors.name.message}</Typography>
              )}
            </ContainerInner>
          )}
        />

        <Controller
          control={control}
          name="userName"
          render={({ field }) => (
            <ContainerInner>
              <Input
                variant="variant1"
                placeholder="Charlene Reed"
                text="User Name"
                {...field}
              />
              {errors.userName && (
                <Typography error>{errors.userName.message}</Typography>
              )}
            </ContainerInner>
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <ContainerInner>
              <Input
                variant="variant1"
                placeholder="charlenereed@gmail.com"
                text="Email"
                {...field}
              />
              {errors.email && (
                <Typography error>{errors.email.message}</Typography>
              )}
            </ContainerInner>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <ContainerInner>
              <Input
                type="password"
                variant="variant1"
                placeholder="**********"
                text="Password"
                {...field}
              />{" "}
              {errors.password && (
                <Typography error>{errors.password.message}</Typography>
              )}
            </ContainerInner>
          )}
        />

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <ContainerInner>
              <Input
                type="date"
                variant="variant1"
                placeholder=""
                text="Date of Birth"
                {...field}
                max={today}
              />{" "}
              {errors.date && (
                <Typography error>{errors.date.message}</Typography>
              )}
            </ContainerInner>
          )}
        />

        <Controller
          control={control}
          name="presentAddress"
          render={({ field }) => (
            <ContainerInner>
              <Input
                variant="variant1"
                placeholder="San Jose, California, USA"
                text="Present Address"
                {...field}
              />{" "}
              {errors.presentAddress && (
                <Typography error>{errors.presentAddress.message}</Typography>
              )}
            </ContainerInner>
          )}
        />

        <Controller
          control={control}
          name="permanentAddress"
          render={({ field }) => (
            <ContainerInner>
              <Input
                variant="variant1"
                placeholder="San Jose, California, USA"
                text="Permanent Address"
                {...field}
              />{" "}
              {errors.permanentAddress && (
                <Typography error>{errors.permanentAddress.message}</Typography>
              )}
            </ContainerInner>
          )}
        />

        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <ContainerInner>
              <Input
                variant="variant1"
                placeholder="San Jose"
                text="City"
                {...field}
              />{" "}
              {errors.city && (
                <Typography error>{errors.city.message}</Typography>
              )}
            </ContainerInner>
          )}
        />
      </InputContainer>
      <ButtonContainer>
        <CustomButton
          onClick={handleSubmit(onSubmit)}
          title="Save"
          variant="form"
        />
      </ButtonContainer>
    </FormContainer>
  );
};

export default EditProfileForm;
