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

      <Typography variant="description2" style={{ marginTop: "30px" }}>
        Change Password
      </Typography>

      <InputContainer>
        <Controller
          control={control}
          name="currentPassword"
          render={({ field }) => (
            <ContainerInner>
              <Input
                type={isPasswordVisible ? "text" : "password"}
                variant="variant1"
                placeholder="**********"
                text="Current Password"
                {...field}
              />
              {errors.currentPassword && (
                <Typography error>{errors.currentPassword.message}</Typography>
              )}
              <div
                style={{
                  position: "absolute",
                  right: 15,
                  bottom: 5,
                  cursor: "pointer",
                }}
                onClick={() => setIsPasswordVisible((presState) => !presState)}
              >
                {isPasswordVisible ? (
                  <Icon name="closeEye" />
                ) : (
                  <Icon name="openEye" />
                )}
              </div>
            </ContainerInner>
          )}
        />

        <Controller
          control={control}
          name="newPassword"
          render={({ field }) => (
            <ContainerInner>
              <Input
                type={isPasswordVisible ? "text" : "password"}
                variant="variant1"
                placeholder="**********"
                text="New Password"
                {...field}
              />
              {errors.newPassword && (
                <Typography error>{errors.newPassword.message}</Typography>
              )}
              <div
                style={{
                  position: "absolute",
                  right: 15,
                  bottom: 5,
                  cursor: "pointer",
                }}
                onClick={() => setIsPasswordVisible((presState) => !presState)}
              >
                {isPasswordVisible ? (
                  <Icon name="closeEye" />
                ) : (
                  <Icon name="openEye" />
                )}
              </div>
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
