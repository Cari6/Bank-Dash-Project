import React, { useState } from "react";
import {
  ButtonContainer,
  Container,
  ContainerInner,
  CustomButton,
  InputContainer,
} from "./styles";
import Typography from "../../typography";
import { Icon, Input, Switch } from "../..";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditProfileValidationSchema } from "./validation";

interface FormValues {
  currentPassword: string;
  newPassword: string;
}

const Security = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
    resolver: yupResolver(EditProfileValidationSchema),
  });
  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  return (
    <Container>
      <Typography variant="description2">Two-factor Authentication</Typography>
      <Switch
        checked={checked}
        onChange={handleChange}
        text="Enable or disable two factor authentication"
      />

      <Typography variant="description2" style={{ margin: "30px 0 20px 0 " }}>
        Change Password
      </Typography>

      <InputContainer>
        <Controller
          control={control}
          name="currentPassword"
          render={({ field }) => (
            <ContainerInner>
              <Input
                variant="variant1"
                placeholder="**********"
                text="Current Password"
                errorMessage={errors.currentPassword?.message}
                isPassword
                {...field}
              />
            </ContainerInner>
          )}
        />

        <Controller
          control={control}
          name="newPassword"
          render={({ field }) => (
            <ContainerInner>
              <Input
                variant="variant1"
                placeholder="**********"
                text="New Password"
                errorMessage={errors.newPassword?.message}
                isPassword
                {...field}
              />
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
    </Container>
  );
};

export default Security;
