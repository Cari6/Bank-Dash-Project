import React, { useState } from "react";
import {
  ButtonContainer,
  CustomButton,
  FormContainer,
  InputContainer,
} from "./styles";
import { Input } from "@/src/components";
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

  console.log("errors", errors);

  return (
    <FormContainer>
      <InputContainer>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="Charlene Reed"
              text="Your Name"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="userName"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="Charlene Reed"
              text="User Name"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="charlenereed@gmail.com"
              text="Email"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              type="password"
              variant="variant1"
              placeholder="**********"
              text="Password"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              type="date"
              variant="variant1"
              placeholder=""
              text="Date of Birth"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="presentAddress"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="San Jose, California, USA"
              text="Present Address"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="permanentAddress"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="San Jose, California, USA"
              text="Permanent Address"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="San Jose"
              text="City"
              {...field}
            />
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
